import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SubcategoriaModel } from '../models/subcategoria.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaService {

  private url = "/api/";

  constructor( private http: HttpClient) { }

  crear( subcategoria: SubcategoriaModel ) {
      return this.http.post(`${ this.url }subcategoria/`, subcategoria);
  }
  listar() {
    return this.http.get(`${ this.url }subcategoria`);
  }
  editar( id: string ) {
    return this.http.get(`${ this.url }subcategoria/${id}`);
  }

  actualizar( subcategoria: SubcategoriaModel) {
    return this.http.put(`${ this.url }subcategoria/${subcategoria.id}`,subcategoria);
  }
  borrar( id: number ) {
    return this.http.delete(`${ this.url }subcategoria/${id}`);
  }


}
