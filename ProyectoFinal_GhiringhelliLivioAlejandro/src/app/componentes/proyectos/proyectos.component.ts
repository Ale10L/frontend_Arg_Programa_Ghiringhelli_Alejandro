import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyectos[] = [];

  constructor(public proyectoService: ProyectoService, private tokenService: TokenService, private router: Router) { }
  isLoged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLoged = true;
    } else {
      this.isLoged = false;
    }
  }

  cargarProyecto(): void{
    this.proyectoService.getProyecto().subscribe(data => {this.proyectos = data});
  }

  onSubmit(){
    this.cargarProyecto();
  }

  eliminar(id?: number){
    if(id != undefined){
      this.proyectoService.baja(id).subscribe({
        next:
            data => {
              alert("Proyecto eliminado exitosamente");
              this.cargarProyecto();
              this.router.navigate(['']);
            },
          error: error => {
            alert("No se pudo eliminar el Proyecto");
            this.router.navigate(['']);
          }
        }
      );
    }
  }
}
