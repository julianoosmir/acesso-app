import { Component, ViewChild } from '@angular/core';
import { Forca } from '../models/forca';
import { ForcaService } from '../core/forca.service';

@Component({
  selector: 'app-forca',
  templateUrl: './forca.component.html',
  styleUrls: ['./forca.component.css']
})

export class ForcaComponent {
  forcas : Forca[] = []

  constructor(private forcaService: ForcaService) { }

  ngOnInit() {
    this.getForca();
  }

  getForca() {
    this.forcaService
      .listar()
      .subscribe((forcas: Forca[]) =>
        this.forcas.push(...forcas)
      );
  }
  deletar(id?:number){
    this.forcaService.delete(id).subscribe(() =>{
        this.forcas = this.forcas.filter(forca => forca.id != id);

    })
  }
}
