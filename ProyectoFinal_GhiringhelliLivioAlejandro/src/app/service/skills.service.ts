import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skills.model';

@Injectable({
  providedIn: 'root'
})

export class SkillSService{
  URL = 'https://bkdghiringhellialejandro.herokuapp.com/skills/'
  //URL = 'https://localhost:8080/skills/'

  constructor(private http: HttpClient) { }

  public getSkill(): Observable<Skill[]>{
    return this.http.get<Skill[]>(this.URL+'traer');
  }

  public detail(id: number): Observable<Skill>{
    return this.http.get<Skill>(this.URL +`detalleskills/${id}`);
  }

  public alta(skill: Skill): Observable<any>{
    return this.http.post<any>(this.URL+`agregarskills`, skill);
  }

  public modificar(id: number, skill: Skill): Observable<any>{
    return this.http.put<any>(this.URL+`editarskills/${id}`, skill);
  }

  public baja(id: number): Observable<Object>{
    return this.http.delete(this.URL+`borrarskills/${id}`);
  }
}
