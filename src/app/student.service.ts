import { Injectable } from '@angular/core';
import { Student } from './Student';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private professorsUrl = 'http://localhost:8090/getStudentList';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET professors from the server */
  getProfessors(): Observable<Student[]> {
    return this.http.get<Student[]>(this.professorsUrl)
      .pipe(
        tap(_ => this.log('fetched professors')),
        catchError(this.handleError<Student[]>('getProfessors', []))
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
}
