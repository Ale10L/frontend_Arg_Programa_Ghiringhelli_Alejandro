import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarEducacionComponent } from './componentes/educacion/editar-educacion.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { NuevaEducacionComponent } from './componentes/educacion/nueva-educacion.component';
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { NuevaExperienciaComponent } from './componentes/experiencia/nueva-experiencia.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditarProyectoComponent } from './componentes/proyectos/editar-proyecto.component';
import { NuevoProyectoComponent } from './componentes/proyectos/nuevo-proyecto.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { EditarSkillHComponent } from './componentes/skills/hard/editar-skill.component';
import { NuevaSkillHComponent } from './componentes/skills/hard/nueva-skill.component';
import { EditarSkillSComponent } from './componentes/skills/soft/editar-skill.component';
import { NuevaSkillSComponent } from './componentes/skills/soft/nueva-skill.component';
import { HardComponent } from './componentes/skills/hard/hard.component';
import { SoftComponent } from './componentes/skills/soft/soft.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'agregarexp', component: NuevaExperienciaComponent},
  {path: 'editarexp/:id', component: EditarExperienciaComponent},
  {path: 'borrarexp/:id', component: ExperienciaComponent},
  {path: 'agregaredu', component: NuevaEducacionComponent},
  {path: 'editaredu/:id', component: EditarEducacionComponent},
  {path: 'borraredu/:id', component: EducacionComponent},
  {path: 'agregarproyecto', component: NuevoProyectoComponent},
  {path: 'editarproyecto/:id', component: EditarProyectoComponent},
  {path: 'borrarproyecto/:id', component: ProyectosComponent},
  {path: 'agregarskillh', component: NuevaSkillHComponent},
  {path: 'editarskillh/:id', component: EditarSkillHComponent},
  {path: 'borrarskillh/:id', component: HardComponent},
  {path: 'agregarskills', component: NuevaSkillSComponent},
  {path: 'editarskills/:id', component: EditarSkillSComponent},
  {path: 'borrarskills/:id', component: SoftComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
