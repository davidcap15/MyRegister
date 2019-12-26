export class UsuarioModel {
    id: number;
    paterno: string;
    materno: string;
    nombre: string;
    
    usuario: string;
    email: string;
    password: string;
    estatus: boolean;

    constructor() {
        this.estatus = true;
    }

}