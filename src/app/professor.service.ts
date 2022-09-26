import { Injectable } from '@angular/core';
import { Professor } from './Professor';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class ProfessorService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private professorsUrl = 'http://localhost:8090/getProfessorList';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET professors from the server */
  getProfessors(): Observable<Professor[]> {
    return this.http.get<Professor[]>(this.professorsUrl)
      .pipe(
        tap(_ => this.log('fetched professors')),
        catchError(this.handleError<Professor[]>('getProfessors', []))
      );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ProfessorService: ${message}`);
  }

  /*
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

  // getCourses(): Observable<Course[]> {
  //   const courses = of(COURSES);
  //   this.messageService.add('HeroService: fetched heroes');
  //   return courses;
  // }

  /** GET heroes from the server */
  // getCourses(): Observable<Course[]> {
  //   return this.http.get<Course[]>(this.heroesUrl)
  // }

  // getCourse(id: number): Observable<Course> {
  //   // For now, assume that a hero with the specified `id` always exists.
  //   // Error handling will be added in the next step of the tutorial.
  //   const course = COURSES.find(c => c.id === id)!;
  //   this.messageService.add(`CourseService: fetched course id=${id}`);
  //   return of(course);
  // }

  /** GET hero by id. Will 404 if id not found */
  // getCourse(id: number): Observable<Course> {
  //   const url = `${this.professorsUrl}/${id}`;
  //   return this.http.get<Course>(url).pipe(
  //     tap(_ => this.log(`fetched hero id=${id}`)),
  //     catchError(this.handleError<Course>(`getHero id=${id}`))
  //   );
  // }



  // getCourses(): Observable<Course[]> {
  //   return this.http.get<Course[]>(this.heroesUrl)
  //     .pipe(
  //       catchError(this.handleError<Course[]>('getCourses', []))
  //     );
  // }

  /** PUT: update the hero on the server */
  // updateCourse(course: Course): Observable<any> {
  //   return this.http.put(this.professorsUrl, course, this.httpOptions).pipe(
  //     tap(_ => this.log(`updated hero id=${course.id}`)),
  //     catchError(this.handleError<any>('updateHero'))
  //   );
  // }

  /** POST: add a new hero to the server */
  // addCourse(course: Course): Observable<Course> {
  //   return this.http.post<Course>(this.professorsUrl, course, this.httpOptions).pipe(
  //     tap((newCourse: Course) => this.log(`added hero w/ id=${newCourse.id}`)),
  //     catchError(this.handleError<Course>('addHero'))
  //   );
  // }

  /** DELETE: delete the hero from the server */
  // deleteCourse(id: number): Observable<Course> {
  //   const url = `${this.professorsUrl}/${id}`;

  //   return this.http.delete<Course>(url, this.httpOptions).pipe(
  //     tap(_ => this.log(`deleted hero id=${id}`)),
  //     catchError(this.handleError<Course>('deleteHero'))
  //   );
  // }

  /* GET heroes whose name contains search term */
  // searchCourses(term: string): Observable<Course[]> {
  //   if (!term.trim()) {
  //     // if not search term, return empty hero array.
  //     return of([]);
  //   }
  //   return this.http.get<Course[]>(`${this.professorsUrl}/?name=${term}`).pipe(
  //     tap(x => x.length ?
  //       this.log(`found heroes matching "${term}"`) :
  //       this.log(`no heroes matching "${term}"`)),
  //     catchError(this.handleError<Course[]>('searchHeroes', []))
  //   );
  // }
}
