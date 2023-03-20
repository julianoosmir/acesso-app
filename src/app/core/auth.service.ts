import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { URL_LOGIN } from '../contants/api';
//import * as moment from "moment";

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  // BASE_PATH: 'http://localhost:8080'
  SESSION_ATTRIBUTE = 'authenticatedUser';

  public username: any;
  public senha: any;

  constructor(private http: HttpClient) {}

  authenticationService(username: String, senha: String) {
    return this.http
      .post(URL_LOGIN, {
        username: username,
        senha: senha
      },{responseType:"text"}).pipe(map((token:string) =>{
        console.log(token);
        this.registerSuccessfulLogin(token);
        return token;
      }));
  }

  registerSuccessfulLogin(token:string) {
    sessionStorage.setItem(this.SESSION_ATTRIBUTE, token);
  }

  logout() {
    sessionStorage.removeItem(this.SESSION_ATTRIBUTE);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.SESSION_ATTRIBUTE);
    if (user === null) return false;
    return true;
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.SESSION_ATTRIBUTE);
    if (user === null) return '';
    return user;
  }
}
