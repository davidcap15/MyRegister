import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url = "/api/";

  constructor( private http: HttpClient) { }

  crear( usuario: UsuarioModel ) {
      return this.http.post(`${ this.url }usuarios/`, usuario);
  }
  listar() {
    return this.http.get(`${ this.url }usuarios`);
  }
  editar( id: string ) {
    return this.http.get(`${ this.url }usuarios/${id}`);
  }
  actualizar( usuario: UsuarioModel) {
    return this.http.put(`${ this.url }usuarios/${usuario.id}`,usuario);
  }
  borrar( id: number ) {
    return this.http.delete(`${ this.url }usuarios/${id}`);
  }
}
