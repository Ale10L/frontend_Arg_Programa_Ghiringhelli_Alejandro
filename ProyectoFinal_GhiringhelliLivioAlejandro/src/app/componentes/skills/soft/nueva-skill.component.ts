import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skills.model';
import { SkillSService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-nueva-skill',
  templateUrl: './nueva-skill.component.html',
  styleUrls: ['./nueva-skill.component.css']
})
export class NuevaSkillSComponent implements OnInit {
  nombre: string = '';
  descripcion: string = '';
  porcentaje: number;

  constructor(private skillService: SkillSService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skill = new Skill(this.nombre, this.descripcion, this.porcentaje);
    this.skillService.alta(skill)
      .subscribe({
        next:
          data => {
            alert("Skill creada exitosamente");
            this.router.navigate(['']);
          },
        error: error => {
          alert("No se pudo crear la Skill");
          this.router.navigate(['']);
        }
      }
      );
  }
}
