import { Injectable } from '@angular/core';
import { Course } from './course';
import { COURSES } from './course-list';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Grade } from './Grade';
import { Student } from './Student';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private coursesUrl = 'http://localhost:8090/getCourseList';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET hero by id. Will 404 if id not found */
  getCourse(id: number): Observable<Course> {
    const url = `http://localhost:8090/getCourseById/${id}`;
    return this.http.get<Course>(url).pipe(
      tap(_ => this.log(`fetched course id=${id}`)),
      catchError(this.handleError<Course>(`getCourse id=${id}`))
    );
  }

  /** GET heroes from the server */
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.coursesUrl)
      .pipe(
        tap(_ => this.log('fetched courses')),
        catchError(this.handleError<Course[]>('getcourses', []))
      );
  }

  /** GET heroes from the server */
  getCoursesAssigned(professorId: number): Observable<Course[]> {
    return this.http.get<Course[]>(`http://localhost:8090/getCoursesAssigned/${professorId}`)
      .pipe(
        tap(_ => this.log('fetched courses assigned')),
        catchError(this.handleError<Course[]>('get courses assigned', []))
      );
  }

  getRegisteredCourses(studentId: number): Observable<Grade[]> {
    return this.http.get<Grade[]>(`http://localhost:8090/getRegisteredCourses/${studentId}`)
      .pipe(
        tap(_ => this.log('fetched registered courses')),
        catchError(this.handleError<Grade[]>('getRegisteredCourses', []))
      );
  }

  getRegisteredCoursesInSemester(studentId: number, semesterId: number): Observable<Grade[]> {
    return this.http.get<Grade[]>(`http://localhost:8090/getRegisteredCoursesInSemester/${studentId}/${semesterId}`)
      .pipe(
        tap(_ => this.log('fetched registered courses in a semester')),
        catchError(this.handleError<Grade[]>('getRegisteredCoursesInSemester', []))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  registerCourse(courseId: number, studentId: number, semesterId: number, isCoursePrimary: number): Observable<boolean> {
    const url = `http://localhost:8090/registerCourse/${studentId}/${semesterId}/${courseId}/${isCoursePrimary}`;
    return this.http.post<boolean>(url,null,this.httpOptions).pipe(
      tap(_ => this.log(`course registered..`)),
      catchError(this.handleError<boolean>(`getCourse id=${courseId}`, false))
    );
  }

  /** GET hero by id. Will 404 if id not found */
  deRegisterCourse(courseId: number, studentId: number): Observable<boolean> {
    const url = `http://localhost:8090/dropCourse/${studentId}/${courseId}`;
    return this.http.delete<boolean>(url).pipe(
      tap(_ => this.log(`course de-registered..`)),
      catchError(this.handleError<boolean>(`getCourse id=${courseId}`, false))
    );
  }

  /** GET heroes from the server */
  getCoursesBySemesterId(semesterId: number): Observable<Course[]> {
    return this.http.get<Course[]>(`http://localhost:8090/getAllCourses/${semesterId}`)
      .pipe(
        tap(_ => this.log('fetched courses by semester id')),
        catchError(this.handleError<Course[]>('getcoursesBySemetserId', []))
      );
  }

  /** GET heroes from the server */
  getEnrolledStudentsInCourse(professorId: number, courseId: number): Observable<Student[]> {
    return this.http.get<Student[]>(`http://localhost:8090/getEnrolledStudents/${professorId}/${courseId}`)
      .pipe(
        tap(_ => this.log('fetched students in a course successfully')),
        catchError(this.handleError<Student[]>('getEnrolledStudentsInCourse', []))
      );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

/**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** PUT: update the hero on the server */
  updateCourse(course: Course): Observable<any> {
    return this.http.put('http://localhost:8090/updateCourse', course, this.httpOptions).pipe(
      tap(_ => this.log(`updated course id=${course.id}`)),
      catchError(this.handleError<any>('updateCourse'))
    );
  }

  /** PUT: update the hero on the server */
  addGrade(studentId: number, courseId: number, grade: string): Observable<any> {
    return this.http.put(`http://localhost:8090/addGrade/${studentId}/${courseId}/${grade}`, null, this.httpOptions).pipe(
      tap(_ => this.log(`added grade for course id=${courseId}`)),
      catchError(this.handleError<any>('addGrade'))
    );
  }

  /** POST: add a new hero to the server */
  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>('http://localhost:8090/addCourse', course, this.httpOptions).pipe(
      tap((newCourse: Course) => this.log(`added course w/ id=${newCourse.id}`)),
      catchError(this.handleError<Course>('addCourse'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteCourse(id: number): Observable<Course> {
    const url = `http://localhost:8090/deleteCourse/${id}`;

    return this.http.delete<Course>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted course id=${id}`)),
      catchError(this.handleError<Course>('deleteCourse'))
    );
  }

  /* GET heroes whose name contains search term */
  searchCourses(term: string): Observable<Course[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Course[]>(`${this.coursesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found heroes matching "${term}"`) :
        this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Course[]>('searchHeroes', []))
    );
  }
}
