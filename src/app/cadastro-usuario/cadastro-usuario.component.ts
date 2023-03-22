import { Component, Input } from '@angular/core';
import { UsuarioDto } from '../models/usuarioDto';
import { UsuarioService } from '../core/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(private usuarioService: UsuarioService,private snackBar: MatSnackBar){

  }
  ngOnInit() {

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
    this.usuarioService.salvar(this.usuario).subscribe(()=>{
      this.showSnackbarTopPosition("salvo com sucesso",'',3000)
    },()=>{

    })
  }
  showSnackbarTopPosition(content: string, action: string | undefined, duration: any) {
    this.snackBar.open(content, action, {
      duration: 2000,
      verticalPosition: "top", // Allowed values are  'top' | 'bottom'
      horizontalPosition: "center" // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
    });
  }

}
