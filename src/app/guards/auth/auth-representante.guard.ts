import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {AuthRepresentanteService} from "../../Service/auth/representante/auth-representante.service";

@Injectable()
export class AuthRepresentanteGuard implements CanActivate {

  constructor(
    private authService: AuthRepresentanteService,
    private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if(this.authService.usuarioEstaAutenticado()){
      return  true;
    }

    this.router.navigate(['/login'])

    return false;
  }

}
