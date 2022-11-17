import { style } from '@angular/animations';
import { Component, Output } from '@angular/core';
import { Countries } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
     li{
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent   {

  termino : string = '';
  hayError : boolean = false;
  paises : Countries[] = [];
  paisesSugeridos : Countries[] = [];
  mostrarSugerencias : boolean = false;


  constructor(private paisservices: PaisService) { }

  buscar( termino : string){
    this.hayError = false;
    this.termino = termino;
    
    
    this.paisservices.buscarPais ( this.termino )
    .subscribe( ( paises ) => {
      console.log(paises);
      this.paises = paises;

    }, (err) => {
      this.hayError = true;
      this.paises = [];
    })
  }

  sugerencias( termino : string){
    this.hayError = false;
    this.termino  = termino;
    this.mostrarSugerencias = true;
    
    this.paisservices.buscarPais (termino)
    .subscribe( paises =>  this.paisesSugeridos = paises.splice(0,3),
    (err) => this.paisesSugeridos = [] );
  }

  buscarSugerido( termino : string){
    this.buscar ( termino );
    this.mostrarSugerencias = false;
  }
}
