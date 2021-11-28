import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

import {Catalogo} from "../../../../../Model/catalogo";
import {CatalogoService} from "../../../../../Service/catalogo/catalogo.service";
import {CatalogoIdNome} from "../catalogoIdNome";

@Component({
  selector: 'app-list-catalogo',
  templateUrl: './list-catalogo.component.html',
  styleUrls: ['./list-catalogo.component.css']
})
export class ListCatalogoComponent implements OnInit {
  catalogo$: Observable<Catalogo[]>;

  constructor(private service: CatalogoService, private router: Router,
              private route: ActivatedRoute, private getCatalogoService: CatalogoIdNome) {

    this.catalogo$ = new Observable<Catalogo[]>();
  }

  ngOnInit(): void {
    const representante = this.route.snapshot.data['representante'];

    this.catalogo$ = this.service.listCatalogos(representante.id);
  }

  getCatalogo(catalogo: Catalogo) {
    // console.log('list');
    // console.log(catalogo);
    this.getCatalogoService.setCatalogo(catalogo);
    this.router.navigate(['catalogo'], {relativeTo: this.route});
  }

  voltar() {
    this.router.navigate(['../']);
  }

}
