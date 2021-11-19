import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {AuthFornecedorService} from "../../Service/auth/fornecedor/auth-fornecedor.service";

@Injectable()
export class AuthFornecedorGuard implements CanActivate {

  constructor(
    private authService: AuthFornecedorService,
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
