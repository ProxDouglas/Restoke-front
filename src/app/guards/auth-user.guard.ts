import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {AuthFornecedorService} from "../Service/auth/fornecedor/auth-fornecedor.service";
import {AuthRepresentanteService} from "../Service/auth/representante/auth-representante.service";


@Injectable()
export class AuthUserGuard implements CanActivate {

  constructor(
    private authFornService: AuthFornecedorService,
    private authRepService: AuthRepresentanteService,
    private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if(this.authFornService.usuarioEstaAutenticado()){
      this.router.navigate(['/fornecedor'])
      return  false;
    }
    if(this.authRepService.usuarioEstaAutenticado()){
      this.router.navigate(['/representante'])
      return  false;
    }

    return true;
  }

}
