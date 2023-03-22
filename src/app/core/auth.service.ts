import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { SESSION_ATTRIBUTE_AUTHENTICATED, SESSION_ATTRIBUTE_ROLE, URL_LOGIN } from '../contants/api';
//import * as moment from "moment";
import { UsuarioService } from './usuario.service';
import decode from 'jwt-decode';
import { Observable, of } from 'rxjs';
import { AuthDto } from '../models/authDTo';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  // BASE_PATH: 'http://localhost:8080'
  SESSION_ATTRIBUTE = 'authenticatedUser';

  public username: any;
  public senha: any;
  authDto?: AuthDto;

  constructor(private http: HttpClient, private usuarioService: UsuarioService) { }


  setRole(authDto: AuthDto) {
    sessionStorage.setItem(SESSION_ATTRIBUTE_ROLE, authDto.role);
  }

  getRole(): string {
    const role = sessionStorage.getItem(SESSION_ATTRIBUTE_ROLE);
    if (role)
      return role
    return '';
  }

  authenticationService(username: String, senha: String) {
    return this.http
      .post(URL_LOGIN, {
        username: username,
        senha: senha
      }, { responseType: "json" }).pipe(map((authDto: any) => {
        if (authDto.token !== 'USUARIO DESABILITADO' && authDto.token !== 'CREDENCIAIS INVALIDAS' && authDto.token !== 'USUARIO NÃO CADASTRADO') {
          this.registerSuccessfulLogin(authDto);
          this.setRole(authDto);
        }
        return authDto;
      }));
  }

  registerSuccessfulLogin(authDto: AuthDto) {
    sessionStorage.setItem(SESSION_ATTRIBUTE_AUTHENTICATED, authDto.token);
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
