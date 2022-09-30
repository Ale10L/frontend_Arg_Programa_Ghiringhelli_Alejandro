import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {
  edu: Educacion = null;

  constructor(private eduservice: EducacionService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.eduservice.detail(id).subscribe({
      next:
        data => {
          this.edu = data;
        },
      error: error => {
        alert("No se pudo modificar la Educación");
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
    devolverFecha = new Date(fecha);
    let fecha_actual = new Date();
    if(fecha === null || devolverFecha.getDay() === fecha_actual.getDay() && devolverFecha.getMonth() === fecha_actual.getMonth() && devolverFecha.getFullYear() === fecha_actual.getFullYear()){
      devolverFecha = "actualidad";
    } else {
      devolverFecha = new Date(fecha).getFullYear();
    }
    return devolverFecha;
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.eduservice.modificar(id, this.edu).subscribe({
      next:
        data => {
          alert("Educación modificada exitosamente");
          this.router.navigate(['']);
        },
      error: error => {
        alert("No se pudo modificar la Educación");
        this.router.navigate(['']);
      }
    }
    );
  }
}
