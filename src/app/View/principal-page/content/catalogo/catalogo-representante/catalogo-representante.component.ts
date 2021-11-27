import { Component, OnInit } from '@angular/core';

import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

import {catchError} from "rxjs/operators";
import {environment} from "../../../../../../environments/environment";


import {ProdutoService} from "../../../../../Service/produto/produto.service";
import {Produto} from "../../../../../Model/produto.interface";
import {Catalogo} from "../../../../../Model/catalogo";
import {CatalogoService} from "../../../../../Service/catalogo/catalogo.service";
import {Representante} from "../../../../../Model/representante.interface";
import {RepresentanteService} from "../../../../../Service/representante/representante.service";

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo-representante.component.html',
  styleUrls: ['./catalogo-representante.component.css']
})
export class CatalogoRepresentanteComponent implements OnInit {


  imagePathRep = `${environment.imagePerfil}`;
  imagePathProd = `${environment.imageDefault}`;

  representante$: Observable<Representante>;
  produtos$: Observable<Produto[]>;
  catalogo!: Catalogo;

  constructor(private prodService: ProdutoService, private router: Router,
              private route: ActivatedRoute, private catService: CatalogoService,
              private repService: RepresentanteService) {

    this.catalogo = this.route.snapshot.data['catalogo'];
    this.representante$ = this.getRep(Number(this.getIDRep()));

    this.produtos$ = new Observable<Produto[]>();
  }

  ngOnInit(): void {

    this.produtos$ = this.onRefresh(this.catalogo.id);
  }

  onRefresh(catId: number): Observable<Produto[]>{
    return this.catService.loadCatalogo(catId).pipe(
      catchError(error =>{
        console.error(error);
        return [];
      })
    );
  }

  getIDRep(): string{
    let url:string[] = this.router.url.toString().split('/');

    let id = url.indexOf('listCatalogo');

    return url[id+1];
  }

  getRep(idRep: number): Observable<Representante>{
    return this.repService.loadByID(idRep).pipe();
  }

  haveIMGProd(imagem: string){
    return imagem != null && imagem != '' && imagem != this.imagePathRep;
  }

  haveIMGRep(imagem: string){
    return imagem != null && imagem != '' && imagem != this.imagePathProd;
  }


  detalhe(produto: Produto) {
    this.router.navigate(['produto', produto.id], {relativeTo: this.route});
  }

  voltar(){
    let path: string[] = this.router.url.toString().split('/');
    this.router.navigate([path[1] + '/' + path[2]]);
  }
}
