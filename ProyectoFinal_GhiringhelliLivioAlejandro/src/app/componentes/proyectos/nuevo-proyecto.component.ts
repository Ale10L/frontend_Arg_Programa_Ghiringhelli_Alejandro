import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent implements OnInit {
  nombre: string = '';
  descripcion: string = '';
  enlace_proyecto: string = '';

  constructor(private proyectoService: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyecto = new Proyectos(this.nombre, this.descripcion, this.enlace_proyecto);
    this.proyectoService.alta(proyecto)
      .subscribe({
        next:
          data => {
            alert("Proyecto creado exitosamente");
            this.router.navigate(['']);
          },
        error: error => {
          alert("No se pudo crear el Proyecto");
          this.router.navigate(['']);
        }
      }
      );
  }
}
