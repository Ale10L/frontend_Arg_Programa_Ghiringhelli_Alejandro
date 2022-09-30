import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.css']
})
export class NuevaEducacionComponent implements OnInit {
  nombre: string = '';
  lugar: string = '';
  fecha_inicio: any = '';
  fecha_fin: any = '';

  constructor(private educacionService: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new Educacion(this.nombre, this.lugar, this.fecha_inicio, this.fecha_fin);
    this.educacionService.alta(educacion)
      .subscribe({
        next:
          data => {
            alert("Educación creada exitosamente");
            this.router.navigate(['']);
          },
        error: error => {
          alert("No se pudo crear la Educación");
          this.router.navigate(['']);
        }
      }
      );
  }
}
