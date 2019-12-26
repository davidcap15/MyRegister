import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { CategoriaModel } from '../../models/categoria.model';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
datos: any;
  cargando: boolean = false;

  constructor(private categoriaSer: CategoriaService) { 
    console.log("constructor");
  }

  ngOnInit() {
    this.cargando= true;
    this.categoriaSer.listar().subscribe(
      resultado => {
        this.datos = resultado;
        this.cargando= false;
      }
    );
    console.log("ngOnInit");
  }
  borrar( datos: CategoriaModel, i: number ) {
    
    console.log(datos.id)
    this.categoriaSer.borrar( datos.id ).subscribe(
      resp => {




        
        console.log(resp);
        this.datos.splice(i, 1);
      }
    );
}
  
}

