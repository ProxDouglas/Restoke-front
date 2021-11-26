import { Component, OnInit } from '@angular/core';

import {Observable, of} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

import {catchError} from "rxjs/operators";
import {environment} from "../../../../../environments/environment";


import {ProdutoService} from "../../../../Service/produto/produto.service";
import {Produto} from "../../../../Model/produto.interface";
import {AuthRepresentanteService} from "../../../../Service/auth/representante/auth-representante.service";
import {CatalogoInterface} from "../../../../Model/catalogo.interface";

@Component({
  selector: 'app-catalogo-edit',
  templateUrl: './catalogo-edit.component.html',
  styleUrls: ['./catalogo-edit.component.css']
})
export class CatalogoEditComponent implements OnInit {

  private listID: number[] = [];

  imagePathProd = `${environment.imageDefault}`;

  produtos$: Observable<Produto[]>;

  catalogo$!: Observable<CatalogoInterface>;

  constructor(private service: ProdutoService, private router: Router,
              private route: ActivatedRoute, private authSevice: AuthRepresentanteService
              ) {

    // this.produtos$ = this.service.list(this.authSevice.getPerfil().id;).pipe().
    // pipe(
    //   catchError(error =>{
    //     return of([]);
    //   })
    // );

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

  usarProduto(idProduto: number) {
    this.listID.push(idProduto);
  }

  novoCatalogo(){
    // this.catalogo$ =
  }

  voltar(){
    this.router.navigate(['representante']);
  }
}
