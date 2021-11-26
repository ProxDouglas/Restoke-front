import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {catchError, switchMap, take} from "rxjs/operators";
import {Observable, of, Subject, EMPTY, empty} from "rxjs";
import {environment} from "../../../../../../../environments/environment";

import {Produto} from "../../../../../../Model/produto.interface";
import {ProdutoService} from "../../../../../../Service/produto/produto.service";
import {AuthFornecedorService} from "../../../../../../Service/auth/fornecedor/auth-fornecedor.service";


@Component({
  selector: 'app-list-produtos',
  templateUrl: './list-produtos.component.html',
  styleUrls: ['./list-produtos.component.css']
})
export class ListProdutosComponent implements OnInit {

  imagePath = `${environment.imageDefault}`;
  produtos!: Produto[];

  produtos$: Observable<Produto[]>;

  constructor(private service: ProdutoService,
              private authService: AuthFornecedorService,
              private router: Router,
              private route: ActivatedRoute) {


    // this.produtos$ = this.service.listFabProd((this.authService.getPerfil() as Fornecedor).id).
    // pipe(
    //   catchError(err => {
    //     return of([]);
    //   })
    // );

    this.produtos$ = this.service.list().
    pipe(
      catchError(err => {
        return of([]);
      })
    );

  }

  ngOnInit(): void {
    // const localSubscription = this.produtos$.subscribe(dados => this.produtos = dados);
    // setTimeout(() => {
    //   localSubscription.unsubscribe();
    // }, 10000);

    this.onRefresh();
  }

  onRefresh() {
    this.produtos$ = <any>this.service.list().pipe(
      // map(),
      // tap(),
      // switchMap(),
      catchError(error => {
        console.error(error);
        // this.error$.next(true);
        //this.handleError();
        return [];
      })
    );
  }

  voltar() {
    this.router.navigate(['fornecedor']);
  }

  getProduto(produtos: Produto) {

  }

  onEdit(id:number){
    this.router.navigate(['editar', id], {relativeTo: this.route});
  }

  onDelete(produto:Produto){
    this.service.remove(produto.id).subscribe(
        resposta =>{
          alert("Produto deletado com sucesso");
          this.onRefresh();
    },
        error=>{
          alert("Tente novamente");
        }
    );
  }

}
