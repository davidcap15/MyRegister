import { Component, OnInit } from '@angular/core';
import { SubcategoriaModel } from '../../models/subcategoria.model';
import { NgForm } from '@angular/forms';
import { SubcategoriaService } from '../../services/subcategoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-subcategoria',
  templateUrl: './subcategoria.component.html',
  styleUrls: ['./subcategoria.component.css']
})
export class SubcategoriaComponent implements OnInit {

  subcategoria: SubcategoriaModel = new SubcategoriaModel();

  constructor(private subcategoriaService: SubcategoriaService,
              private route: ActivatedRoute,
              private roter: Router) { }

  ngOnInit() {
  
    const id = this.route.snapshot.paramMap.get('id');
    if ( id !== 'nuevo') {
      this.subcategoriaService.editar(id).pipe(
        map( (resp: any) => {
            this.subcategoria = resp;
            console.log(this.subcategoria);
            return this.subcategoria;
        })
      ).subscribe();
    }
  }
  guardar( form: NgForm) {
    if ( form.invalid ) {
      Swal.fire({
        position: 'top-end',
        type: 'error',
        title: 'Datos no validos',
        showConfirmButton: false,
        timer: 1500
      })
      console.log('Formulario no válido');
      return;
    }
    console.log(this.subcategoria);
    if ( this.subcategoria.id ) {
      this.subcategoriaService.actualizar(this.subcategoria).subscribe(
        respuesta => {
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Se actualizo correctamente',
            showConfirmButton: false,
            timer: 1500
          })
          console.log(respuesta);
        }
      );
    } else {
      this.subcategoriaService.crear(this.subcategoria).subscribe(
        respuesta => {
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Subategoria agregada correctamente',
            showConfirmButton: false,
            timer: 1500
          })
          console.log(respuesta);
        });
    }
    this.roter.navigateByUrl('subcategorias');
  }
}




