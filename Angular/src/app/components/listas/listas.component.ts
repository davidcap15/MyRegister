import { Component, OnInit } from '@angular/core';
import { ListaService } from '../../services/lista.service';
import { ListaModel } from '../../models/lista.model';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {
  datos: any;
  cargando: boolean = false;
  constructor(private listaSer: ListaService) { 
    console.log("constructor");
  }

  ngOnInit() {
    this.cargando= true;
    this.listaSer.listar().subscribe(
      resultado => {
        this.datos = resultado;
        this.cargando= false;
      }
    );
    console.log("ngOnInit");
  }
  borrar( datos: ListaModel, i: number ) {
    console.log(datos.id)
    this.listaSer.borrar( datos.id ).subscribe(
      resp => {
        console.log(resp);
        this.datos.splice(i, 1);
      }
    );
}
  
}