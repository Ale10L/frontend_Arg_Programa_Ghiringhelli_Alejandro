import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {
  proyecto: Proyectos = null;

  constructor(private proyectoervice: ProyectoService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoervice.detail(id).subscribe({
      next:
          data => {
            this.proyecto = data;
          },
        error: error => {
          alert("No se pudo modificar el Proyecto");
          this.router.navigate(['']);
        }
      }
    );
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoervice.modificar(id, this.proyecto).subscribe({
      next:
          data => {
            alert("Proyecto modificado exitosamente");
            this.router.navigate(['']);
          },
        error: error => {
          alert("No se pudo modificar el Proyecto");
          this.router.navigate(['']);
        }
      }
    );
  }
}
