export class Educacion {
  id?: number;
  nombre: string;
  lugar: string;
  fecha_inicio: string;
  fecha_fin: string;


  constructor(nombre: string, lugar: string, fecha_inicio: string, fecha_fin: string){
      this.nombre = nombre;
      this.lugar = lugar;
      this.fecha_inicio = fecha_inicio;
      this.fecha_fin = fecha_fin;
    }
}
