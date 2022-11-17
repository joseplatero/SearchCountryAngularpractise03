import { Component, Input, OnInit } from '@angular/core';
import { Countries } from 'src/app/pais/interfaces/pais.interface';


@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html'
})
export class PaisTablaComponent {

  @Input() paises : Countries[] = [];

  constructor() { }


}
