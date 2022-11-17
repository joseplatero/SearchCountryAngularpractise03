import { Component } from '@angular/core';
import { Countries } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles : [`
  button {
    margin-right: 5px;
  }
  `]
})
export class PorRegionComponent {

  regiones : string[] = ['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];
  regionActiva : string = '';
  paises : Countries[] = [];
  hayError : boolean = false;



  constructor( private paisservices: PaisService ) { }

  getClaseCSS( region : string) : string{

    return (region === this.regionActiva) 
    ? 'btn btn-primary'
    : 'btn btn-outline-primary';

  }

  activarRegion( region : string){

    if ( region === this.regionActiva) { return; }

    this.regionActiva = region;
    this.paises = [];
    

    this.paisservices.buscarRegion ( this.regionActiva)
    .subscribe( ( paises ) => {
      console.log(paises);
      this.paises = paises;

    }, (err) => {
      this.paises = [];
    })

    //todo hacer el llamdo al servicio
  }

}
