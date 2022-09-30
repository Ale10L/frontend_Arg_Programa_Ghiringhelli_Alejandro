import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LogoAPComponent } from './componentes/logo-ap/logo-ap.component';
import { RedessocialesComponent } from './componentes/redessociales/redessociales.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HardComponent } from './componentes/skills/hard/hard.component';
import { SoftComponent } from './componentes/skills/soft/soft.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service.service';
import { NuevaExperienciaComponent } from './componentes/experiencia/nueva-experiencia.component';
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia.component';
import { NuevaEducacionComponent } from './componentes/educacion/nueva-educacion.component';
import { EditarEducacionComponent } from './componentes/educacion/editar-educacion.component';
import { NuevoProyectoComponent } from './componentes/proyectos/nuevo-proyecto.component';
import { NuevaSkillHComponent } from './componentes/skills/hard/nueva-skill.component';
import { NuevaSkillSComponent } from './componentes/skills/soft/nueva-skill.component';
import { EditarProyectoComponent } from './componentes/proyectos/editar-proyecto.component';
import { EditarSkillHComponent } from './componentes/skills/hard/editar-skill.component';
import { EditarSkillSComponent } from './componentes/skills/soft/editar-skill.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DATE_LOCALE } from '@angular/material/core'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    RedessocialesComponent,
    FooterComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardComponent,
    SoftComponent,
    ProyectosComponent,
    HomeComponent,
    LoginComponent,
    NuevaExperienciaComponent,
    EditarExperienciaComponent,
    NuevaEducacionComponent,
    EditarEducacionComponent,
    NuevoProyectoComponent,
    NuevaSkillHComponent,
    NuevaSkillSComponent,
    EditarProyectoComponent,
    EditarSkillHComponent,
    EditarSkillSComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule
  ],
  providers: [
    interceptorProvider,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
