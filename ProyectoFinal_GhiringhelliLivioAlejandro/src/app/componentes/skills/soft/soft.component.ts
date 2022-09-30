import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skills.model';
import { SkillSService } from 'src/app/service/skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-soft',
  templateUrl: './soft.component.html',
  styleUrls: ['./soft.component.css']
})
export class SoftComponent implements OnInit {
  skills: Skill[] = [];

  constructor(public skillService: SkillSService, private tokenService: TokenService, private router: Router) { }
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
