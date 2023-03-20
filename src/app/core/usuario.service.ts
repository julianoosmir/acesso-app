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
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', 'POST');
    headers.append('Authorization', `Bearer ${this.getToken()}`);
    user = {
      nome: user.nome,
      username: user.username,
      perfil: user.perfil,
      senha: user.senha,
      email: user.email,
      ativo: user.ativo
    }
    return this.http.post(URL_USER, user,{headers : headers});
  }

  listar(): Observable<UsuarioResponse[]> {
    const headers = new HttpHeaders();
    headers.append('Authorization', `Bearer ${this.getToken()}`);
    return this.http.get<UsuarioResponse[]>(URL_USER_TODOS);
  }
}
