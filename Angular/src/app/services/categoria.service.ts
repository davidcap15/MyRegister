import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CategoriaModel } from '../models/categoria.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private url = "/api/";

  constructor( private http: HttpClient) { }

  crear( categoria: CategoriaModel ) {
      return this.http.post(`${ this.url }categoria/`, categoria);
  }
  listar() {
    return this.http.get(`${ this.url }categoria`);
  }
  editar( id: string ) {
    return this.http.get(`${ this.url }categoria/${id}`);
  }

  actualizar( categoria: CategoriaModel) {
    return this.http.put(`${ this.url }categoria/${categoria.id}`,categoria);
  }
  borrar( id: number ) {
    return this.http.delete(`${ this.url }categoria/${id}`);
  }


}
