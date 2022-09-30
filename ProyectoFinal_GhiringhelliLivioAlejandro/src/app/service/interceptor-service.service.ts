import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenService } from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{
  constructor(private tokenService: TokenService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    let intReq = req;
    const token = this.tokenService.getToken();
    if(token !== null){
      intReq = req.clone({
        //headers: new HttpHeaders({'Authorization':this.authService.getToken()});
        headers: req.headers.set('Authorization', 'Bearer'+token)
        //+'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY2MjQ3OTQwMCwiZXhwIjoxNjYyNTE1NDAwfQ.MiwaS7FR2txHLJFb3s20S-x6wCHF9b6XA3yj0Ac3vQGhMbBpuKsQqYUjuAo7X-BcUaVWV_SupQjnc1z1etJkQw')
      });
    }
    return next.handle(intReq);
  }
}

export const interceptorProvider = [{
  provide: HTTP_INTERCEPTORS,
  useClass: InterceptorService,
  multi: true
}];
