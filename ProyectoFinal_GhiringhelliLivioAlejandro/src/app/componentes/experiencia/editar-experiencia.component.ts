import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia_Laboral } from 'src/app/model/experiencia_laboral.model';
import { ExperienciaLaboralService } from 'src/app/service/experiencia-laboral.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {
  expLab: Experiencia_Laboral = null;
  constructor(private expservice: ExperienciaLaboralService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.expservice.detail(id).subscribe({
      next:
          data => {
            this.expLab = data;
          },
        error: error => {
          alert("No se pudo modificar la Experiencia laboral");
          this.router.navigate(['']);
        }
      }
    );
  }

  getFecha_Inicio(fecha: string): any {
    let devolverFecha: any;
    devolverFecha = new Date(fecha);
    return devolverFecha;
  }

  getFecha_Fin(fecha: any): any {
    let devolverFecha: any;
    let fecha_actual = new Date();
    if (fecha !== null) {
      devolverFecha = new Date(fecha);
      if (devolverFecha.getFullYear() === fecha_actual.getFullYear() && devolverFecha.getMonth() === fecha_actual.getMonth() && devolverFecha.getDay() === fecha_actual.getDay()) {
        devolverFecha = "actualidad";
      }
    }
    return devolverFecha;
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.expservice.modificar(id, this.expLab).subscribe({
      next:
          data => {
            alert("Experiencia laboral modificada exitosamente");
            this.router.navigate(['']);
          },
        error: error => {
          alert("No se pudo modificar la Experiencia laboral");
          this.router.navigate(['']);
        }
      }
    );
  }
}
