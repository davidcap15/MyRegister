import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { UsuarioModel } from '../../models/usuario.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: any;
  cargando: boolean = false;

  constructor( private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.cargando= true;
    this.usuariosService.listar().subscribe(
      res=> {
        this.usuarios = res;
        this.cargando= false;
      }
    );
  }
  borrar( usuario: UsuarioModel, i: number ) {
      this.usuariosService.borrar( usuario.id ).subscribe(
        resp => {
          this.usuarios.splice(i, 1);
        }
      );
  }

}
