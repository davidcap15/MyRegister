import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DevolucionModel } from '../models/devolucion.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DevolucionService {

  private url = "/api/";

  constructor( private http: HttpClient) { }

  crear( devolucion: DevolucionModel ) {
      return this.http.post(`${ this.url }observacion/`, devolucion);
  }
  listar() {
    return this.http.get(`${ this.url }observacion`);
  }
 

  actualizar( devolucion: DevolucionModel) {
    return this.http.put(`${ this.url }observacion/${devolucion.id}`,devolucion);
  }
 

}
