import { Component, OnInit } from '@angular/core';
import { HerramientaService } from '../../services/herramienta.service';
import { HerramientaModel } from '../../models/herramienta.model';



@Component({
  selector: 'app-nuevos',
  templateUrl: './nuevos.component.html',
  styleUrls: ['./nuevos.component.css']
})
export class NuevosComponent implements OnInit {
  datos: any;
  cargando: boolean = false;

  constructor(private herramientaSer: HerramientaService) { 
    console.log("constructor");
  }

  ngOnInit() {
    this.cargando= true;
    this.herramientaSer.listar().subscribe(
      resultado => {
        this.datos = resultado;
        this.cargando= false;
      }
    );
    console.log("ngOnInit");
  }
  borrar( datos: HerramientaModel, i: number ) {
    console.log(datos.id)
    this.herramientaSer.borrar( datos.id ).subscribe(
      resp => {





        
        console.log(resp);
        this.datos.splice(i, 1);
      }
    );
}
  
}
