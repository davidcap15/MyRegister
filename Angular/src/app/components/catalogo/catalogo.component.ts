import { Component, OnInit } from '@angular/core';
import { HerramientaService } from '../../services/herramienta.service';
import { HerramientaModel } from '../../models/herramienta.model';
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  datos: any;
  cargando: boolean = false;
  constructor(private herramientaSer: HerramientaService){
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

}

