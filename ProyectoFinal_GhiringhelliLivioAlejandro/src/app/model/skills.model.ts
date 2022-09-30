export class Skill {
  id?: number;
  nombre: string;
  descripcion: string;
  porcentaje: number;

  constructor(nombre: string, descripcion: string, porcentaje: number) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.porcentaje = porcentaje;
  }
}
