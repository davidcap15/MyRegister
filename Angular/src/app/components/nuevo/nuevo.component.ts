import { Component, OnInit } from '@angular/core';
import { HerramientaModel } from '../../models/herramienta.model';
import { NgForm } from '@angular/forms';
import { HerramientaService } from '../../services/herramienta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2'
import { CategoriaService } from '../../services/categoria.service';
import { SubcategoriaService } from '../../services/subcategoria.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  herramienta: HerramientaModel = new HerramientaModel();
  categoria: any;
  subcategoria: any;


  constructor(private herramientaService: HerramientaService,
    private route: ActivatedRoute,
    private roter: Router,
    private categoriaService: CategoriaService,
    private subcategoriaService: SubcategoriaService){}

  ngOnInit() {





    
    const id = this.route.snapshot.paramMap.get('id');
    if ( id !== 'nuevo') {
      this.herramientaService.editar(id).pipe(
        map( (resp: any) => {
            this.herramienta = resp;
            console.log(this.herramienta);
            return this.herramienta;
        })
      ).subscribe(); 
    }
////////////////////////////////////////////////////
this.categoriaService.listar().subscribe(
  res => {
 this.categoria = res;
 console.log(res);
}
)

this.subcategoriaService.listar().subscribe(
  res1 => {
 this.subcategoria = res1;
 console.log(res1);
}
)
    
////////////////////////////////////////////////////////



  }
  guardar( form: NgForm) {
    if ( form.invalid ) {
  
      console.log('Formulario no válido');
      return;
    }
    console.log(this.herramienta);
    if ( this.herramienta.id ) {
      Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Se actualizo correctamente',
        showConfirmButton: false,
        timer: 1500
      }).then((result)=>{
        this.herramientaService.actualizar(this.herramienta).subscribe(
          respuesta => {
            console.log(respuesta);
            this.roter.navigateByUrl('nuevos');
          }
        );
      })
    } else {
      
      this.herramientaService.crear(this.herramienta).subscribe(
        respuesta => {
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Herramienta agregada correctamente',
            showConfirmButton: false,
            timer: 1500

            
          }).then((result)=>{
            this.roter.navigateByUrl('nuevos');
          })
          console.log(respuesta);
        });
      }

  }
}





  

 
