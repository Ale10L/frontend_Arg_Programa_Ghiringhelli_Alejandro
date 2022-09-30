import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skillh.model';
import { SkillHService } from 'src/app/service/skillh.service';

@Component({
  selector: 'app-nueva-skill',
  templateUrl: './nueva-skill.component.html',
  styleUrls: ['./nueva-skill.component.css']
})
export class NuevaSkillHComponent implements OnInit {
  nombre: string = '';
  descripcion: string = '';
  porcentaje: number;

  constructor(private skillService: SkillHService, private router: Router) { }

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
