import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia_Laboral } from 'src/app/model/experiencia_laboral.model';
import { ExperienciaLaboralService } from 'src/app/service/experiencia-laboral.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css']
})
export class NuevaExperienciaComponent implements OnInit {
  nombre: string = '';
  descripcion: string = '';
  fecha_inicio: any = '';
  fecha_fin: any = '';

  constructor(private experienciaService: ExperienciaLaboralService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const experiencia = new Experiencia_Laboral(this.nombre, this.descripcion, this.fecha_inicio, this.fecha_fin);
    this.experienciaService.alta(experiencia)
      .subscribe({
        next:
          data => {
            alert("Experiencia laboral creada exitosamente");
            this.router.navigate(['']);
          },
        error: error => {
          alert("No se pudo crear la Experiencia laboral");
          this.router.navigate(['']);
        }
      }
      );
  }

}
