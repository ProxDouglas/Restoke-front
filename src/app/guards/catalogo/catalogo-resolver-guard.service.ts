import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';

import {Catalogo} from "../../Model/catalogo";
import {CatalogoService} from "../../Service/catalogo/catalogo.service";

@Injectable({
  providedIn: 'root'
})
export class CatalogoResolverGuardService implements Resolve<Catalogo> {
  constructor(private service: CatalogoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Catalogo> {
    if (route.params && route.params['idCat']) {
      return this.service.loadByID(route.params['idCat']);
    }

    return  of({
      id: 0,
      nome: '',
      representante: 0,
      produtos: [],
    });
  }

}
