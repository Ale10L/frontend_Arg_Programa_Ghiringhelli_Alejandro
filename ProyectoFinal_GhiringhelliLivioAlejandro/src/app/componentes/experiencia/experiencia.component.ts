import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia_Laboral } from 'src/app/model/experiencia_laboral.model';
import { ExperienciaLaboralService } from 'src/app/service/experiencia-laboral.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencia: Experiencia_Laboral[] = [];

  constructor(private experienciaService: ExperienciaLaboralService, private tokenService: TokenService, private router: Router) { }

  isLoged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLoged = true;
    } else {
      this.isLoged = false;
    }
  }

  cargarExperiencia(): void{
    this.experienciaService.getExperienciaLaboral().subscribe(data => {this.experiencia = data;});
  }

  getYearInicio(fecha: string): number {
    let devolverFecha: number;
    devolverFecha = new Date(fecha).getFullYear();
    return devolverFecha;
  }

  getYearFin(fecha: any): any {
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

  onSubmit(){
    this.cargarExperiencia();
  }

  eliminar(id?: number){
    if(id != undefined){
      this.experienciaService.baja(id).subscribe({
        next:
            data => {
              alert("Experiencia laboral eliminada exitosamente");
              this.cargarExperiencia();
              this.router.navigate(['']);
            },
          error: error => {
            alert("No se pudo eliminar la Experiencia laboral");
            this.router.navigate(['']);
          }
        }
      );
    }
  }
}
