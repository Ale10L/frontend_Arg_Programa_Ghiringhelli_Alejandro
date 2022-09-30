import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})

export class ProyectoService{
  URL = 'https://bkdghiringhellialejandro.herokuapp.com/proyecto/'
  //URL = 'https://localhost:8080/proyecto/'

  constructor(private http: HttpClient) { }

  public getProyecto(): Observable<Proyectos[]>{
    return this.http.get<Proyectos[]>(this.URL+'traer');
  }

  public detail(id: number): Observable<Proyectos>{
    return this.http.get<Proyectos>(this.URL +`detalleproyecto/${id}`);
  }

  public alta(proyecto: Proyectos): Observable<any>{
    return this.http.post<any>(this.URL+`agregarproyecto`, proyecto);
  }

  public modificar(id: number, proyecto: Proyectos): Observable<any>{
    return this.http.put<any>(this.URL+`editarproyecto/${id}`, proyecto);
  }

  public baja(id: number): Observable<Object>{
    return this.http.delete(this.URL+`borrarproyecto/${id}`);
  }
}
