import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Payment } from '../interfaces/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  /** GET payments from the server */
  getPaymentsByStudentId(studentId: number): Observable<Payment[]> {
    return this.http.get<Payment[]>(`http://localhost:8090/getPayments/${studentId}`)
      .pipe(
        tap(_ => this.log('fetched payments')),
        catchError(this.handleError<Payment[]>('getPaymentsByStudentId', []))
      );
  }

  makePayment(studentId: number, paymentMethod: string): Observable<any> {
    return this.http.put<any>(`http://localhost:8090/payFee/${studentId}/${paymentMethod}`, null, this.httpOptions).pipe(
      tap(payment => this.log(`payment successfull for student id=${studentId}`)),
      catchError(this.handleError<any>('payFee', undefined))
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
