import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';

import {CatalogoInterface} from "../../Model/catalogo.interface";
import {CatalogoService} from "../../Service/catalogo/catalogo.service";

@Injectable({
  providedIn: 'root'
})
export class CatalogoResolverGuardService implements Resolve<CatalogoInterface> {
  constructor(private service: CatalogoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CatalogoInterface> {
    if (route.params && route.params['id']) {
      return this.service.loadByID(route.params['id']);
    }

    return  of({
      nome: '',
      id: 0,
      produtos: [],
    });
  }

}
