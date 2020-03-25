import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders} from '@angular/common/http';
import { Register} from 'src/app/Request/register'
import{HttpErrorResponse} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Login } from '../Request/login';
import { Router } from '@angular/router';
import { TutorRegister } from '../Request/tutorRegister';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  serverUrl='http://bookmetutor-backend.ap-southeast-1.elasticbeanstalk.com';
  
  role:string;

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
     } )
    };

    
    constructor(private http:HttpClient,
                private router:Router) { }

  createRegisterPost(register:Register)
  {
    return this.http.post<Register>(this.serverUrl+'/account/register-student',register,this.httpOptions).
    pipe(
      retry(3),
      catchError(this.handleError)
    )
  }

  createTutorRegisterPost(tutorRegister:TutorRegister){
    return this.http.post<Register>(this.serverUrl+'/account/register-tutor',tutorRegister,this.httpOptions).
    pipe(
      retry(3),
      catchError(this.handleError)
    )
  }

  

  createLoginPost(login:Login)
  {
    return this.http.post<Login>(this.serverUrl+'/account/authenticate',login,this.httpOptions).
    pipe(
      retry(3),
      catchError(this.handleError),
     
    )
  }

  LoggedIn(){
    this.role=localStorage.getItem('role');
    return !!(localStorage.getItem('token')&& localStorage.getItem('role'));
 
  }
  
  LoggedOut(){
     localStorage.removeItem('token')
     localStorage.removeItem('role')
     localStorage.removeItem('mail')
     localStorage.removeItem('isRememberMe')
     this.router.navigate([''])
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
