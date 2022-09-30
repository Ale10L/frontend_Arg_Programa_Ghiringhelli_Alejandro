export class Experiencia_Laboral{
  id?: number;
  nombre: string;
  descripcion: string;
  fecha_inicio: string;
  fecha_fin: string;


  constructor(nombre: string, descripcion: string, fecha_inicio: string, fecha_fin: string){
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.fecha_inicio = fecha_inicio;
      this.fecha_fin = fecha_fin;
    }
}
