export class Producto {
    id:Number;
    img: String;
	nombre: String;
	precio: Number;
    descripcion: String;
    coordenadas: String;
    
    constructor(id,img?,nombre?,precio?,descripcion?,coordenadas?){
        this.id = id;
        this.img = img || null;
        this.nombre = nombre || null;
        this.precio = precio || null;
        this.descripcion = descripcion || null;
        this.coordenadas = coordenadas || null;
    }
}
