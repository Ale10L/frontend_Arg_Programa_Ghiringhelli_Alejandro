export class Persona{
  id?: number;
  apellido: string;
  nombre: string;
  acerca_de: string;
  fecha_nac: string;
  imagen_perfil: string;
  localidad: string;
  email: string;
  titulo: string;
  enlace_linkedin: string;
  enlace_github: string;
  enlace_instagram: string;
  enlace_whatsapp: string;

  constructor(apellido: string, nombre: string, acerca_de: string, fecha_nac: string, imagen_perfil: string,
    localidad: string, email: string, titulo: string, enlace_linkedin: string, enlace_github: string,
    enlace_instagram: string, enlace_whatsapp: string){
      this.apellido = apellido;
      this.nombre = nombre;
      this.acerca_de = acerca_de;
      this.fecha_nac = fecha_nac;
      this.imagen_perfil = imagen_perfil;
      this.localidad = localidad;
      this.email = email;
      this.titulo = titulo;
      this.enlace_linkedin = enlace_linkedin;
      this.enlace_github = enlace_github;
      this.enlace_instagram = enlace_instagram;
      this.enlace_whatsapp = enlace_whatsapp;
    }
}
