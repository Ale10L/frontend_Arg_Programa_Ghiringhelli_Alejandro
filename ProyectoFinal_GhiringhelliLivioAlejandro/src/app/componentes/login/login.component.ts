import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario.model';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoged = false;
  isLogin = false;
  isLoginFail = false;
  loginUsuario?: LoginUsuario;
  nombreUsuario: string = '';
  contrasenia: string = '';
  roles: string[] = [];
  errorMsj: string = '';

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLoged = true;
      this.isLogin = false;
      this.roles = this.tokenService.getAuthAuthorities();
    }
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.contrasenia);
    this.authService.login(this.loginUsuario)
      .subscribe(
        {
          next: data => {
            this.isLoged = true;
            this.isLoginFail = false;
            this.tokenService.setToken(data.token);
            this.tokenService.setUserName(data.nombreUsuario);
            this.tokenService.setAuthAuthorities(data.authorities);
            this.roles = data.authorities;
            this.router.navigate(['']);
          },
          error: err => {
            this.isLoged = false;
            this.isLoginFail = true;
            this.errorMsj = err.error.errorMsj;
            console.log(this.errorMsj);
          }
        });
  }

  cancelar() {
    this.router.navigate([''])
  }
}
