import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia_Laboral } from '../model/experiencia_laboral.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaLaboralService {
  URL = 'https://bkdghiringhellialejandro.herokuapp.com/explab/'
  //URL = 'https://localhost:8080/explab/'

  constructor(private http: HttpClient) { }

  public getExperienciaLaboral(): Observable<Experiencia_Laboral[]>{
    return this.http.get<Experiencia_Laboral[]>(this.URL+'traer');
  }

  public detail(id: number): Observable<Experiencia_Laboral>{
    return this.http.get<Experiencia_Laboral>(this.URL +`detalleexp/${id}`);
  }

  public alta(experiencia: Experiencia_Laboral): Observable<any>{
    return this.http.post<any>(this.URL+`agregarexp`, experiencia);
  }

  public modificar(id: number, experiencia: Experiencia_Laboral): Observable<any>{
    return this.http.put<any>(this.URL+`editarexp/${id}`, experiencia);
  }

  public baja(id: number): Observable<Object>{
    return this.http.delete(this.URL+`borrarexp/${id}`);
  }
}
