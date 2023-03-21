import { Component } from '@angular/core';
import { ForcaService } from '../core/forca.service';
import { Forca } from '../models/forca';
import { Location } from '@angular/common';

@Component({
  selector: 'app-forca-cadastro',
  templateUrl: './forca-cadastro.component.html',
  styleUrls: ['./forca-cadastro.component.css']
})
export class ForcaCadastroComponent {

  id?: number;
  dica? = '';
  palavra = '';
  constructor(private forcaService: ForcaService,private location:Location,) { }


  ngOnInit() {
    console.log(this.location.getState());
    this.verificarState();
  }

  verificarState(){
    if(this.location.getState()){
      this.dica = this.getForca(this.location.getState()).dica;
      this.palavra = this.getPalavra(this.location.getState());
      this.id = this.getForca(this.location.getState()).id
    }
  }

  salvar(){
    const forca = new Forca;
    forca.dica = this.dica;
    forca.palavra = this.palavra;
    if(this.id){
      forca.id = this.id;
      this.forcaService.alterar(forca).subscribe((result)=>{
        console.log(result);
      });

    }


    this.forcaService.salvar(forca).subscribe((result)=>{
      console.log(result);
    });

  }
  getForca(state:any):Forca{
    return state.forca;
  }
  getPalavra(state:any): string | any{
    return this.getForca(state).palavra;
  }

}
