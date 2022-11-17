import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Countries } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PaisService {


  private apiUrl : string = 'https://restcountries.com/v2';

  get httpParams (){
    return new HttpParams().set ('fields', 'name,capital,alpha2Code,flags,population');
  } 

  constructor( private http : HttpClient) { }

  buscarPais ( termino : string) : Observable<Countries[]>{
    const url = `${ this.apiUrl }/name/${ termino }`;
    this.http.get( url );
    return this.http.get<Countries[]>( url, { params : this.httpParams } );
  }

  getPaisporAlpha ( id : string) : Observable<Countries>{
    const url = `${ this.apiUrl }/alpha/${ id }`;
    this.http.get( url );
    return this.http.get<Countries>( url );
  }

  buscarRegion( region : string) : Observable<Countries[]>{



    const url = `${ this.apiUrl }/regionalbloc/${ region }`;
    this.http.get( url )
    return this.http.get<Countries[]>( url, { params : this.httpParams } )
    .pipe(
      tap(console.log)
    )
  }
}

