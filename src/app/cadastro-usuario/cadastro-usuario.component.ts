import { Component, Input } from '@angular/core';
import { UsuarioDto } from '../models/usuarioDto';
import { UsuarioService } from '../core/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { User } from '../models/usuarioModel';
import { UsuarioResponse } from '../models/usuarioResponse';


@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {

  usuario = new UsuarioDto;
  user! : User;
  @Input() nome? = '';
  @Input() username: string | undefined;
  @Input() perfil: string | undefined;
  @Input() senha:string | undefined;
  @Input() email:string | undefined;
  @Input() ativo: boolean | undefined

  constructor(private usuarioService: UsuarioService,   private location: Location,private snackBar: MatSnackBar){

  }
  ngOnInit() {
    this.getUserLocation();
  }

  salvarCampos(){
    this.usuario.nome = this.nome;
    this.usuario.username = this.username;
    this.usuario.perfil = this.perfil;
    this.usuario.senha = this.senha;
    this.usuario.email = this.email;
    this.usuario.ativo = this.ativo;
    if(this.user){
      this.usuario.id = this.user.id;
    }
  }
  salvar(){
    this.salvarCampos();
    if(this.user){
      this.usuarioService.alterar(this.usuario).subscribe(()=>{
        this.showSnackbarTopPosition("alterado com sucesso",'',3000)
      },()=>{

      })
    }else{
      this.usuarioService.salvar(this.usuario).subscribe(()=>{
        this.showSnackbarTopPosition("salvo com sucesso",'',3000)
      },()=>{

      })
    }

  }

  getUserLocation(){

    if(this.location.getState()){
      let stateLocation = this.location.getState() as any;
      let userLocation = stateLocation.user as UsuarioResponse;
      console.log(this.location.getState(),userLocation);
      if(userLocation){
        this.usuarioService.getById(userLocation.id).subscribe((response :User)=>{
          this.ativo = response.ativo;
          this.nome = response.nome;
          this.email = response.email;
          this.username = response.username;
          this.perfil = userLocation.perfil;
          this.user = response;
        });
      }
    }


  }


  showSnackbarTopPosition(content: string, action: string | undefined, duration: any) {
    this.snackBar.open(content, action, {
      duration: 2000,
      verticalPosition: "top", // Allowed values are  'top' | 'bottom'
      horizontalPosition: "center" // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
    });
  }

}
