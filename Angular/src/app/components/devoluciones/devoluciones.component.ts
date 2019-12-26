import { Component, OnInit } from '@angular/core';
import { DevolucionService } from '../../services/devolucion.service';
import { DevolucionModel } from '../../models/devolucion.model';

@Component({
  selector: 'app-devoluciones',
  templateUrl: './devoluciones.component.html',
  styleUrls: ['./devoluciones.component.css']
})
export class DevolucionesComponent implements OnInit {
  datos: any;
  cargando: boolean = false;

  constructor(private entregaSer: DevolucionService) { 
    console.log("constructor");
  }

  ngOnInit() {
    this.cargando= true;
    this.entregaSer.listar().subscribe(
      resultado => {
        this.datos = resultado;
        this.cargando= false;
      }
    );

  }
  }





