import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { switchMap, tap} from 'rxjs/operators';
import { Countries } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  pais!: Countries;

  constructor( 
    private activateRouter : ActivatedRoute,
    private PaisService    : PaisService
    ) { }

  ngOnInit(): void {

    this.activateRouter.params
    .pipe(
      switchMap(( {id} ) => this.PaisService.getPaisporAlpha( id ) ),
      tap(console.log)
    )
    .subscribe( pais => this.pais = pais);
    ;
    
    // this.activateRouter.params
    // .subscribe( ({id}) => {
    //   console.log( id )

    //   this.PaisService.getPaisporAlpha( id )
    //   .subscribe( pais => {
    //     console.log( pais );
    //   });
    // });

  }

}
