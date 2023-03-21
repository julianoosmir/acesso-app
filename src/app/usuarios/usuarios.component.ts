import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { UsuarioService } from '../core/usuario.service';
import { UsuarioResponse } from '../models/usuarioResponse';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent {
  usuarios: UsuarioResponse[] = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {

    this.getUsuarios();
  }

  getUsuarios() {
    this.usuarioService
      .listar()
      .subscribe((usuarios: UsuarioResponse[]) =>
        this.usuarios.push(...usuarios)
      );
  }

}
