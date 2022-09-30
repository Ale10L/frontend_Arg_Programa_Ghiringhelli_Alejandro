import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skillh.model';
import { SkillHService } from 'src/app/service/skillh.service';

@Component({
  selector: 'app-editar-skill',
  templateUrl: './editar-skill.component.html',
  styleUrls: ['./editar-skill.component.css']
})
export class EditarSkillHComponent implements OnInit {
  skill: Skill = null;

  constructor(private skillservice: SkillHService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillservice.detail(id).subscribe({
      next:
          data => {
            this.skill = data;
          },
        error: error => {
          alert("No se pudo modificar la Skill");
          this.router.navigate(['']);
        }
      }
    );
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillservice.modificar(id, this.skill).subscribe({
      next:
          data => {
            alert("Skill modificada exitosamente");
            this.router.navigate(['']);
          },
        error: error => {
          alert("No se pudo modificar la Skill");
          this.router.navigate(['']);
        }
      }
    );
  }
}
