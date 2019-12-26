import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from '../../models/categoria.model';
import { NgForm } from '@angular/forms';
import { CategoriaService } from '../../services/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categoria: CategoriaModel = new CategoriaModel();

  constructor(private categoriaService: CategoriaService,
              private route: ActivatedRoute,
              private roter: Router){}
  ngOnInit() {
  
    const id = this.route.snapshot.paramMap.get('id');
    if ( id !== 'nuevo') {
      this.categoriaService.editar(id).pipe(
        map( (resp: any) => {
            this.categoria = resp;
            console.log(this.categoria);
            return this.categoria;
        })
      ).subscribe();
    }
  }
  guardar( form: NgForm) {
    if ( form.invalid ) {
     
      console.log('Formulario no válido');
      return;
    }
    console.log(this.categoria);
    if ( this.categoria.id ) {
      this.categoriaService.actualizar(this.categoria).subscribe(
        respuesta => {
           Swal.fire({
  position: 'top-end',
  type: 'success',
  title: 'Se actualizo correctamente',
  showConfirmButton: false,
  timer: 1500
})
        }
      );
    } else {
      this.categoriaService.crear(this.categoria).subscribe(
        respuesta => {
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Categoria agregada correctamente',
            showConfirmButton: false,
            timer: 1500
          })
          console.log(respuesta);
        });
        
    }
    this.roter.navigateByUrl('categorias');

  }
}

