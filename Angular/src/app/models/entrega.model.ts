export class EntregaModel {
    id: number;
    fechaentrega: Date;
    id_usuario: number;
    id_herramienta: number;
    estatus: boolean;
    constructor() {
        this.estatus = true;
        this.id_usuario = 0;
        this.id_herramienta = 0;
    }
}