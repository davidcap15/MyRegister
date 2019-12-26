export class HerramientaModel {
    id: number;
    nombre: string;
    descripcion: string;
    cantidad: number;
    id_categoria: number;
    id_subcategoria: number;
    estatus: boolean;
    constructor() {

        this.estatus = true;
        this.id_categoria = 0;
        this.id_subcategoria = 0;
    }
}