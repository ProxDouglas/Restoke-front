import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import {Fornecedor} from "../../../Model/fornecedor.interface";
import {FornecedorService} from "../../../Service/fornecedor/fornecedor.service";


@Injectable({
  providedIn: 'root'
})
export class FonecedorResolverGuard implements Resolve<Fornecedor> {
  constructor(private service: FornecedorService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Fornecedor> {
    if (route.params && route.params['id']) {
      return this.service.loadByID(route.params['id']);
    }

    return of({
      id: 0,
      nome: '',
      cnpj: '' ,
      nomeFantasia: '' ,
      txtApresentacao: '' ,
      fraseImpacto: '' ,
      contatoFabrica: '' , //?????
      endereco: '' ,
      email: '' ,
      numContato: '' ,
      site: '' ,
    });
  }
}
