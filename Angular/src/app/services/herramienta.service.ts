import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HerramientaModel } from '../models/herramienta.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HerramientaService {

  private url = "/api/";

  constructor( private http: HttpClient) { }

  crear( herramienta: HerramientaModel ) {
      return this.http.post(`${ this.url }registro/`, herramienta);
  }
  listar() {
    return this.http.get(`${ this.url }registro`);
  }
  editar( id: string ) {
    return this.http.get(`${ this.url }registro/${id}`);
  }

  actualizar( herramienta: HerramientaModel) {
    return this.http.put(`${ this.url }registro/${herramienta.id}`,herramienta);
  }
  borrar( id: number ) {
    return this.http.delete(`${ this.url }registro/${id}`);
  }


}
