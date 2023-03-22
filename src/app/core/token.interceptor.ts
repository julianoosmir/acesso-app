import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private usuarioService: UsuarioService) {

  }
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    let token = this.usuarioService.getToken();


    request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });

    return next.handle(request);
  }

}
