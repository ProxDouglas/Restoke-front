import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import {Fornecedor} from "../../../Model/fornecedor.interface";
import {FornecedorService} from "../../../Service/fornecedor/fornecedor.service";
import {Representante} from "../../../Model/representante.interface";
import {RepresentanteService} from "../../../Service/representante/representante.service";


@Injectable({
  providedIn: 'root'
})
export class RepresentanteResolverGuard implements Resolve<Representante> {
  constructor(private service: RepresentanteService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Representante> {
    if (route.params && route.params['id']) {
      return this.service.loadByID(route.params['id']);
    }

    return of({
      id: 0 ,
      nome: '',
      cpf:'',
      telefone:'',
      email:'',
      apresentacao:'',
      fotoPerfil: new File(["sem_imagem"], "sem_imagem.jpg", {
        type: "jpg",
      }),
      fornecedor: 0,
    });
  }
}
