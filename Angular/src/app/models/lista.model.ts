export class ListaModel {
    id: number;
    id_usuario: number;
    id_categoria: number;
    estatus: boolean;
    constructor() {
        this.estatus = true;
        this.id_usuario = 0;
        this.id_categoria = 0;
    }
}