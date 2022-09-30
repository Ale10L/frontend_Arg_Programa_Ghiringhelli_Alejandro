import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-redessociales',
  templateUrl: './redessociales.component.html',
  styleUrls: ['./redessociales.component.css']
})
export class RedessocialesComponent implements OnInit {
  persona: Persona = new Persona("", "", "", "", "", "", "", "", "", "", "", "");
  isLoged = false;
  constructor(public personaService: PersonaService, private router: Router, private tokenService: TokenService, private sanitizer: DomSanitizer) { }


  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLoged = true;
    } else {
      this.isLoged = false;
    }
    this.personaService.getPersona().subscribe(data => { this.persona = data });
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  login(): void {
    this.router.navigate(['/login']);
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}
