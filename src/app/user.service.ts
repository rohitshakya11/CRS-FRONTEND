import { Injectable } from '@angular/core';
import { Student } from './interfaces/Student';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { User } from './interfaces/User';
import { Professor } from './interfaces/Professor';
import { Admin } from './interfaces/Admin';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private professorsUrl = 'http://localhost:8090/getStudentList';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  
  /** GET professors from the server */
  login(user: User): Observable<User> {
    return this.http.get<User>(`http://localhost:8090/login/${user.emailId}/${user.password}/${user.role}`)
      .pipe(
        tap(_ => this.log('login successsful')),
        catchError(this.handleError<User>('loginUser', undefined))
      );
  }

  /** GET professors from the server */
  register(userName:string, userEmailId:string, userPassword: string, userRole:string): Observable<boolean> {
    return this.http.post<boolean>(`http://localhost:8090/registerStudent`, {name:userName, emailId:userEmailId, password:userPassword, role:userRole}, this.httpOptions)
      .pipe(
        tap(_ => this.log('registration successsful')),
        catchError(this.handleError<boolean>('registerUser', false))
      );
  }

  getStudentByEmail(userEmail: string): Observable<Student> {
    return this.http.get<Student>(`http://localhost:8090/getStudentByEmail/${userEmail}`)
      .pipe(
        tap(_ => this.log('Student details fetched successsful')),
        catchError(this.handleError<Student>('getStudentByUserEmail', undefined))
      );
  }

  getProfessorByEmail(userEmail: string): Observable<Professor> {
    return this.http.get<Professor>(`http://localhost:8090/getProfessorByEmail/${userEmail}`)
      .pipe(
        tap(_ => this.log('Professor details fetched successsful')),
        catchError(this.handleError<Student>('getProfessorByUserEmail', undefined))
      );
  }

  getAdminByEmail(userEmail: string): Observable<Admin> {
    return this.http.get<Admin>(`http://localhost:8090/getAdminByEmail/${userEmail}`)
      .pipe(
        tap(_ => this.log('Admin details fetched successsful')),
        catchError(this.handleError<Student>('getAdminByUserEmail', undefined))
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
