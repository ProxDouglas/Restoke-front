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
// import {GetCatalogoService} from "./get-catalogo.service";
import {ProdutosCatalogo} from "../../../../../Model/produtos-catalogo";
import {CatalogoIdNome} from "../catalogoIdNome";

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo-representante.component.html',
  styleUrls: ['./catalogo-representante.component.css']
})
export class CatalogoRepresentanteComponent implements OnInit {


  imagePathRep = `${environment.imagePerfil}`;
  imagePathProd = `${environment.imageDefault}`;

  representante$: Observable<Representante>;
  produtos$: Observable<Produto>[] = [];
  // prodIDs$!: Observable<ProdutosCatalogo[]>;
  // prodIDs!: ProdutosCatalogo[];
  catalogo: Catalogo;

  constructor(private prodService: ProdutoService, private router: Router,
              private route: ActivatedRoute, private catService: CatalogoService,
              private repService: RepresentanteService, private catalogoIdNome: CatalogoIdNome) {


    // this.catalogo = this.route.snapshot.data['catalogo'];
    this.catalogo = this.catalogoIdNome.getCatalogo();

    // console.log('cat Rep');
    // console.log(catalogo);

    // this.prodIDs$.subscribe(value => this.prodIDs = value)


    this.representante$ = this.getRep(Number(this.getIDRep()));


    // this.produtos$ = new Observable<Produto[]>();
    this.produtos$ = [];
  }

  ngOnInit(): void {

    // this.produtos$ = this.onRefresh(this.catalogo.id);
    // this.produtos$ = this.onRefresh(this.catalogo);

    this.getIDsProd(this.catalogo.id);

  }

  // onRefresh(catId: number): Observable<Produto[]>{
  //   return this.catService.loadCatalogo(catId).pipe(
  //     catchError(error =>{
  //       console.error(error);
  //       return [];
  //     })
  //   );
  // }

  getIDsProd(catId: number){
    this.catService.loadCatalogo(catId).pipe()
      .subscribe(dados => {
        // this.onRefresh();
      });
  }

  getObject(prodCats: ProdutosCatalogo[]){
    console.log(prodCats);
    this.onRefresh(prodCats)
  }

  onRefresh(catalogo: ProdutosCatalogo[]){
    // this.produto$ = [];
    // for(let i = 0; i < catalogo.length; i++){
    //   console.log('log '+ i);
    //   produto$.push(this.getProduto(catalogo[i].identificador));
    // }
    // return produto$;
  }

  getProduto(idProd: number): Observable<Produto>{
    return this.prodService.loadByID(idProd).pipe(
      catchError(error =>{
        console.error(error);
        return new Observable<Produto>();
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
