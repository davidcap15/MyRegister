import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();

  constructor(private usuarioService: UsuariosService,
              private route: ActivatedRoute,
              private roter: Router){}
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if ( id !== 'nuevo') {
      this.usuarioService.editar(id).pipe(
        map( (resp: any) => {
            this.usuario = resp;
            this.usuario.usuario = resp.correo;
            console.log(this.usuario);
            return this.usuario;
        })
      ).subscribe();
    }
  }
  guardar( form: NgForm) {
    if( form.invalid ) {
      
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
    if( this.usuario.id ) {
      this.usuarioService.actualizar(this.usuario)
      .subscribe(res => {

        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: 'Se actualizo correctamente',
          showConfirmButton: false,
          timer: 1500
        })
        console.log(res);
      });
    } else {
      this.usuarioService.crear(this.usuario)
      .subscribe(res => {
        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: 'Usuario agregado',
          showConfirmButton: false,
          timer: 1500
        })
        console.log(res);
      });
    }
    this.roter.navigateByUrl('usuarios');
  }
  
  }

