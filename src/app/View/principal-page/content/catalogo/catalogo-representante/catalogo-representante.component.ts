import { Component, OnInit } from '@angular/core';

import {Observable, of} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

import {catchError} from "rxjs/operators";
import {environment} from "../../../../../../environments/environment";


import {ProdutoService} from "../../../../../Service/produto/produto.service";
import {Produto} from "../../../../../Model/produto.interface";

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo-representante.component.html',
  styleUrls: ['./catalogo-representante.component.css']
})
export class CatalogoRepresentanteComponent implements OnInit {


  imagePathRep = `${environment.imagePerfil}`;
  imagePathProd = `${environment.imageDefault}`;

  produtos$: Observable<Produto[]>;

  constructor(private service: ProdutoService,
              private router: Router,
              private route: ActivatedRoute) {

    this.produtos$ = this.service.list().pipe().
    pipe(
      catchError(error =>{
        return of([]);
      })
    );
  }

  ngOnInit(): void {

    this.onRefresh();

  }

  onRefresh(){
    this.produtos$ = this.service.list().pipe(
      catchError(error =>{
        console.error(error);
        return [];
      })
    );
  }

  detalhe(produto: Produto) {
    this.router.navigate(['produto', produto.id], {relativeTo: this.route});
  }

  voltar(){
    let path: string[] = this.router.url.toString().split('/');
    this.router.navigate([path[1] + '/' + path[2]]);
  }
}
