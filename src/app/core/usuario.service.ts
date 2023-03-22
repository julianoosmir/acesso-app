import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { URL_USER, URL_USER_TODOS } from "../contants/api";
import { UsuarioDto } from "../models/usuarioDto";
import { UsuarioResponse } from "../models/usuarioResponse";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService{
  constructor(private http: HttpClient){

  }

  getToken():string{
    const token = sessionStorage.getItem("authenticatedUser");
    if(token)
      return token
    return '';
  }

  salvar(user: UsuarioDto) {
    return this.http.post(URL_USER, user);
  }

  delete(id?: number){
    return this.http.delete(URL_USER +"/"+ id);
  }

  listar(): Observable<UsuarioResponse[]> {
    return this.http.get<UsuarioResponse[]>(URL_USER_TODOS);
  }
}
