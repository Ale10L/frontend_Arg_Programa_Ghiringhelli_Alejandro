import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skillh.model';

@Injectable({
  providedIn: 'root'
})

export class SkillHService{
  URL = 'https://bkdghiringhellialejandro.herokuapp.com/skillh/'
  //URL = 'https://localhost:8080/skillh/'

  constructor(private http: HttpClient) { }

  public getSkill(): Observable<Skill[]>{
    return this.http.get<Skill[]>(this.URL+'traer');
  }

  public detail(id: number): Observable<Skill>{
    return this.http.get<Skill>(this.URL +`detalleskillh/${id}`);
  }

  public alta(skill: Skill): Observable<any>{
    return this.http.post<any>(this.URL+`agregarskillh`, skill);
  }

  public modificar(id: number, skill: Skill): Observable<any>{
    return this.http.put<any>(this.URL+`editarskillh/${id}`, skill);
  }

  public baja(id: number): Observable<Object>{
    return this.http.delete(this.URL+`borrarskillh/${id}`);
  }
}
