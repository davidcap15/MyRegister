import { Component, OnInit } from '@angular/core';
import { DevolucionModel } from '../../models/devolucion.model';
import { NgForm } from '@angular/forms';
import { DevolucionService } from '../../services/devolucion.service';

import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2'
import { UsuariosService } from '../../services/usuarios.service';
import { HerramientaService } from '../../services/herramienta.service';

@Component({
  selector: 'app-devolucion',
  templateUrl: './devolucion.component.html',
  styleUrls: ['./devolucion.component.css']
})
export class DevolucionComponent implements OnInit {
  devolucion: DevolucionModel = new DevolucionModel();
  usuarios: any;

  herramienta: any;
  constructor(private devolucionService: DevolucionService,
    private route: ActivatedRoute,
    private roter: Router,
    private usuariosService: UsuariosService,
    private herramientaService: HerramientaService
    ){}

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
     
    
      return;
    }
    console.log(this.devolucion);
    if ( this.devolucion.id ) {
      this.devolucionService.actualizar(this.devolucion).subscribe(
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
     
      this.devolucionService.crear(this.devolucion).subscribe(
        respuesta => {
          
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Devolucion agregada correctamente',
            showConfirmButton: false,
            timer: 1500

            

            
          }).then((result)=>{
            this.roter.navigateByUrl('entregas');
          })
          
        });
      }
      
      
    }
  }






  

  