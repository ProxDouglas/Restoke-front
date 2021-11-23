import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

import {Catalogo} from "../../../../../Model/catalogo";
import {CatalogoService} from "../../../../../Service/catalogo/catalogo.service";

@Component({
  selector: 'app-list-catalogo',
  templateUrl: './list-catalogo.component.html',
  styleUrls: ['./list-catalogo.component.css']
})
export class ListCatalogoComponent implements OnInit {
  catalogo$: Observable<Catalogo[]>;

  constructor(private service: CatalogoService, private router: Router,
              private route: ActivatedRoute) {

    this.catalogo$ = new Observable<Catalogo[]>();
  }

  ngOnInit(): void {
    const representante = this.route.snapshot.data['representante'];

    this.catalogo$ = this.service.listCatalogos(representante.id);

  }

  getCatalogo(id: number) {
    this.router.navigate(['catalogo', id], {relativeTo: this.route});
  }

  voltar() {
    this.router.navigate(['../']);
  }

}
