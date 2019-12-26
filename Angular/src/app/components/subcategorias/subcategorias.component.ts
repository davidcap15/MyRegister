import { Component, OnInit } from '@angular/core';
import { SubcategoriaService } from '../../services/subcategoria.service';
import { SubcategoriaModel } from '../../models/subcategoria.model';

@Component({
  selector: 'app-subcategorias',
  templateUrl: './subcategorias.component.html',
  styleUrls: ['./subcategorias.component.css']
})
export class SubcategoriasComponent implements OnInit {
datos: any;
cargando: boolean = false;
  constructor(private subcategoriaSer: SubcategoriaService) { 
    console.log("constructor");
  }

  ngOnInit() {
    this.cargando= true;
    this.subcategoriaSer.listar().subscribe(
      resultado => {
        this.datos = resultado;
        this.cargando= false;
        
      }
    );
    console.log("ngOnInit");
  }
  borrar( datos: SubcategoriaModel, i: number ) {
    console.log(datos.id)
    this.subcategoriaSer.borrar( datos.id ).subscribe(
      resp => {
        console.log(resp);
        this.datos.splice(i, 1);
      }
    );
}
  
}
