import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Produto} from "../../Model/produto.interface";
import {ProdutoService} from "../../Service/produto/produto.service";

@Injectable({
  providedIn: 'root'
})
export class ProdutoResolverGuard implements Resolve<Produto> {
  constructor(private service: ProdutoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Produto> {
    if (route.params && route.params['idProd']) {
      console.log('carregando produto');
      return this.service.loadByID(route.params['idProd']);
    }

    return  of({
      id: 0,
      nome: '',
      codigo_barra: '',
      descricao: '',
      categoria: '',
      imagem: '',
      // imagem: new File(["sem_imagem"], "sem_imagem.jpg", {
      //   type: "jpg",
      // }),
      fornecedor: 0,
    });
  }

}
