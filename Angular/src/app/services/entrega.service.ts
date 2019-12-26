import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EntregaModel } from '../models/entrega.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EntregaService {

  private url = "/api/";

  constructor( private http: HttpClient) { }

  crear( entrega: EntregaModel ) {
      return this.http.post(`${ this.url }control/`, entrega);
  }
  listar() {
    return this.http.get(`${ this.url }control`);
  }


  actualizar( entrega: EntregaModel) {
    return this.http.put(`${ this.url }control/${entrega.id}`,entrega);
  }



}
