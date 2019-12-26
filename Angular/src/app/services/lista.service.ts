import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ListaModel } from '../models/lista.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  private url = "/api/";

  constructor( private http: HttpClient) { }

  crear( lista: ListaModel ) {
      return this.http.post(`${ this.url }lista/`, lista);
  }
  listar() {
    return this.http.get(`${ this.url }lista`);
  }
  editar( id: string ) {
    return this.http.get(`${ this.url }lista/${id}`);
  }

  actualizar( lista: ListaModel) {
    return this.http.put(`${ this.url }lista/${lista.id}`,lista);
  }
  borrar( id: number ) {
    return this.http.delete(`${ this.url }lista/${id}`);
  }


}
