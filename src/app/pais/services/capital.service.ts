import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Countries } from '../interfaces/pais.interface';


@Injectable({
  providedIn: 'root'
})
export class CapitalService {

  private apiUrl : string = 'https://restcountries.com/v2';

  constructor( private http : HttpClient) { }

  buscarCapital ( termino : string) : Observable<Countries[]>{
    const url = `${ this.apiUrl }/capital/${ termino }`;
    this.http.get( url );
    return this.http.get<Countries[]>( url );
  }
}
