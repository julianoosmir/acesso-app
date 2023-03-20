import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { UsuarioService } from '../core/usuario.service';
import { UsuarioResponse } from '../models/usuarioResponse';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  usuarios: UsuarioResponse[] = [];

  @ViewChild(MatTable)
  table!: MatTable<PeriodicElement>;

  constructor(private usuarioService: UsuarioService) {}

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

  addData(): void {

  }

  removeData() {

  }
}
