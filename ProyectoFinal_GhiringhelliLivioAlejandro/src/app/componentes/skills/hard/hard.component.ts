import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skillh.model';
import { SkillHService } from 'src/app/service/skillh.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hard',
  templateUrl: './hard.component.html',
  styleUrls: ['./hard.component.css']
})
export class HardComponent implements OnInit {
  skills: Skill[] = [];

  constructor(public skillService: SkillHService, private tokenService: TokenService, private router: Router) { }
  isLoged = false;

  ngOnInit(): void {
    this.cargarSkill();
    if(this.tokenService.getToken()){
      this.isLoged = true;
    } else {
      this.isLoged = false;
    }
  }

  cargarSkill(): void{
    this.skillService.getSkill().subscribe(data => {this.skills = data});
  }

  onSubmit(){
    this.cargarSkill();
  }

  eliminar(id?: number){
    if(id != undefined){
      this.skillService.baja(id).subscribe({
        next:
            data => {
              alert("Skill eliminada exitosamente");
              this.cargarSkill();
              this.router.navigate(['']);
            },
          error: error => {
            alert("No se pudo eliminar la Skill");
            this.router.navigate(['']);
          }
        }
      );
    }
  }
}
