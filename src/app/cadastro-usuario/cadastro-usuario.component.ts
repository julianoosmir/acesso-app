import { Component, Input } from '@angular/core';
import { UsuarioDto } from '../models/usuarioDto';
import { UsuarioService } from '../core/usuario.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {

  usuario = new UsuarioDto;
  @Input() nome = '';
  @Input() username: string | undefined;
  @Input() perfil: string | undefined;
  @Input() senha:string | undefined;
  @Input() email:string | undefined;
  @Input() ativo: boolean | undefined

  constructor(private usuarioService: UsuarioService){

  }
  ngOnInit() {
    let jwt = this.usuarioService.getToken();
    let jwtData = jwt.split('.')[1]
    let decodedJwtJsonData = window.atob(jwtData)
    let decodedJwtData = JSON.parse(decodedJwtJsonData)

    let isAdmin = decodedJwtData.admin

    console.log('jwtData: ' + jwtData)
    console.log('decodedJwtJsonData: ' + decodedJwtJsonData)
    console.log('decodedJwtData: ' + decodedJwtData)
    console.log('Is admin: ' + isAdmin)

  }

  salvarCampos(){
    this.usuario.nome = this.nome;
    this.usuario.username = this.username;
    this.usuario.perfil = this.perfil;
    this.usuario.senha = this.senha;
    this.usuario.email = this.email;
    this.usuario.ativo = this.ativo;
  }
  salvar(){
    this.salvarCampos();
    this.usuarioService.salvar(this.usuario).subscribe((result)=>{
      console.log(result);
    })
  }

}
