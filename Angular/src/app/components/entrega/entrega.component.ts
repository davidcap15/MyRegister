
import { Component, OnInit } from '@angular/core';
import { EntregaModel } from '../../models/entrega.model';
import { NgForm } from '@angular/forms';
import { EntregaService } from '../../services/entrega.service';

import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2'
import { UsuariosService } from '../../services/usuarios.service';
import { HerramientaService } from '../../services/herramienta.service';
@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.component.html',
  styleUrls: ['./entrega.component.css']
})
export class EntregaComponent implements OnInit {
  entrega: EntregaModel = new EntregaModel();
  usuarios: any;
  herramienta: any;

  constructor(private entregaService: EntregaService,
    private route: ActivatedRoute,
    private roter: Router,
    private usuariosService: UsuariosService,
    private herramientaService: HerramientaService){}

  ngOnInit() {


//////////////////////////////////////////////////////////
      this.usuariosService.listar().subscribe(
           res => {
          this.usuarios = res;
          console.log(res);
      }
      )




      this.herramientaService.listar().subscribe(
        res => {
       this.herramienta = res;
       console.log(res);
   }
   )
//////////////////////////////////////////////////////////



  }
  guardar( form: NgForm) {
    if ( form.invalid ) {
      Swal.fire({
        title: 'LLene los datos',
        animation: false,
        customClass: {
          popup: 'animated tada'
        }
      })
      console.log('Formulario no válido');
      return;
    }
    console.log(this.entrega);
    if ( this.entrega.id ) {
      this.entregaService.actualizar(this.entrega).subscribe(
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
     
      this.entregaService.crear(this.entrega).subscribe(
        respuesta => {
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Entregas agregada correctamente',
            showConfirmButton: false,
            timer: 1500



          }).then((result)=>{
            this.roter.navigateByUrl('entregas');
          })
          console.log(respuesta);
        });
      }
   

  }
}
