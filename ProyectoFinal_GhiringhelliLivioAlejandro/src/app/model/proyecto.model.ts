export class Proyectos {
  id?: number;
  nombre: string;
  descripcion: string;
  enlace_proyecto: string;

  constructor(nombre: string, descripcion: string, enlace_proyecto: string) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.enlace_proyecto = enlace_proyecto;
  }
}
