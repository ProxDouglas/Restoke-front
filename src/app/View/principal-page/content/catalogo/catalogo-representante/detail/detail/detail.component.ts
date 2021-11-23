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

    this.produto$ = new Observable<Produto>();

  }

  ngOnInit(): void {
    const produto = this.route.snapshot.data['produto'];
    this.produto$ = this.service.loadByID(produto.id)
      .pipe(catchError(err => {
        return new Observable<Produto>();
      })
    );

  }

  voltar() {
    let path: string[] = this.router.url.toString().split('/');
    this.router.navigate([path[1] + '/' + path[2] + '/' + path[3] + '/' + path[4]]);
  }
}
