import { Component, OnInit } from '@angular/core';
import { Countries } from '../../interfaces/pais.interface';
import { CapitalService } from '../../services/capital.service';


@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent implements OnInit {

  termino : string = '';
  hayError : boolean = false;
  paises : Countries[] = [];

  constructor( private capitalservices: CapitalService ) { }

  ngOnInit(): void {
  }

  buscar( termino : string){
    this.hayError = false;
    this.termino = termino;
    
    this.capitalservices.buscarCapital ( this.termino )
    .subscribe( ( capital ) => {
      console.log(capital);
      this.paises = capital;

    }, (err) => {
      this.hayError = true;
      this.paises = [];
    })
  }

  sugerencias( termino : string){
    this.hayError = false;
    
  }
  
}
