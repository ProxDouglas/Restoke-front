import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Produto} from "../Model/produto.interface";
import {ProdutoService} from "../Service/produto.service";

@Injectable({
  providedIn: 'root'
})
export class ProdutoResolverGuard implements Resolve<Produto> {
  constructor(private service: ProdutoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Produto> {
    if (route.params && route.params['id']) {
      return this.service.loadByID(route.params['id']);
    }

    return  of({
      id: 0,
      nome: '',
      codigo_barra: '',
      descricao: '',
      categoria: '',
      imagens: new File(["sem_imagem"], "sem_imagem.jpg", {
        type: "jpg",
      }),
      fornecedor: 0,
    });
  }

}
