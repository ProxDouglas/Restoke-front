import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../../../../../environments/environment";

import {ProdutoService} from "../../../../../../../Service/produto/produto.service";
import {ActivatedRoute, Router} from "@angular/router";

import {Produto} from "../../../../../../../Model/produto.interface";
import {Observable, of} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  imagePath = `${environment.imageDefault}`
  produto$: Observable<Produto>;


  constructor( private service: ProdutoService, private router: Router,
               private route: ActivatedRoute) {

    const produto = this.route.snapshot.data['produto'];
    console.log(produto);
    this.produto$ = this.onRefresh(produto.id);


  }

  ngOnInit(): void {
    // this.produto$ =
  }

  onRefresh(idProd: number): Observable<Produto>{
    return this.service.loadByID(idProd)
      .pipe(catchError(err => {
          return new Observable<Produto>();
        })
      );
  }

  haveIMG(imagem: string){
    return imagem != null && imagem != '' && imagem != this.imagePath;
  }

  voltar() {
    let path: string[] = this.router.url.toString().split('/');
    this.router.navigate([path[1] + '/' + path[2] + '/' + path[3] + '/' + path[4]]);
  }
}
