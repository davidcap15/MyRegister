
import { Component, OnInit } from '@angular/core';
import { EntregaService } from '../../services/entrega.service';
import { EntregaModel } from '../../models/entrega.model';



@Component({
  selector: 'app-entregas',
  templateUrl: './entregas.component.html',
  styleUrls: ['./entregas.component.css']
})
export class EntregasComponent implements OnInit {
  datos: any;
  cargando: boolean = false;

  constructor(private entregaSer: EntregaService) { 
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
