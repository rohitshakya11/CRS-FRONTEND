import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Student } from '../interfaces/Student';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  /** PUT: update the hero on the server */
  approveStudentRegistration(studentId: number): Observable<Student> {
    return this.http.put<Student>(`http://localhost:8090/approveStudentRegistration/${studentId}`, null, this.httpOptions).pipe(
      tap(student => this.log(`registration approved for student id=${student.id}`)),
      catchError(this.handleError<Student>('approvedStudentRegistration', undefined))
    );
  }

  /** PUT: update the hero on the server */
  generateReportCard(studentId: number): Observable<Student> {
    return this.http.put<Student>(`http://localhost:8090/generateReportCard/${studentId}`, null, this.httpOptions).pipe(
      tap(student => this.log(`generate report card for student id=${student.id}`)),
      catchError(this.handleError<Student>('generateReportCard', undefined))
    );
  }

  /** PUT: update the hero on the server */
  generateBill(studentId: number): Observable<number> {
    return this.http.post<number>(`http://localhost:8090/generateBill/${studentId}`, null, this.httpOptions).pipe(
      tap(amount => this.log(`generate bill for student id=${studentId}`)),
      catchError(this.handleError<number>('generateBill', -1))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
   private handleError<T>(operation = 'operation', result?: T) {
    return (errorResponse: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(errorResponse); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${errorResponse.message}`);

      alert(errorResponse.error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
