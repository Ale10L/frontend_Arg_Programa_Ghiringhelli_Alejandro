import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL = 'https://bkdghiringhellialejandro.herokuapp.com/edu/'
  //URL = 'https://localhost:8080/edu/'

  constructor(private http: HttpClient) { }

  public getEducacion(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.URL+'traer');
  }

  public detail(id: number): Observable<Educacion>{
    return this.http.get<Educacion>(this.URL +`detalledu/${id}`);
  }

  public alta(educacion: Educacion): Observable<any>{
    return this.http.post<any>(this.URL+`agregaredu`, educacion);
  }

  public modificar(id: number, educacion: Educacion): Observable<any>{
    return this.http.put<any>(this.URL+`editaredu/${id}`, educacion);
  }

  public baja(id: number): Observable<Object>{
    return this.http.delete(this.URL+`borraredu/${id}`);
  }
}
