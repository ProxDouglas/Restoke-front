import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';

import {Catalogo} from "../../Model/catalogo";
import {CatalogoService} from "../../Service/catalogo/catalogo.service";
import {ProdutosCatalogo} from "../../Model/produtos.catalogo";

@Injectable({
  providedIn: 'root'
})
export class CatalogoResolverGuardService implements Resolve<ProdutosCatalogo[]> {
  constructor(private service: CatalogoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProdutosCatalogo[]> {
    if (route.params && route.params['idCat']) {
      return this.service.loadCatalogo(route.params['idCat']);
    }

    return  of(
      []
    );
  }

}
