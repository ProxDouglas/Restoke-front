import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {delay, take, tap} from "rxjs/operators";
import {Catalogo} from "../../Model/catalogo";

import {ProdutoService} from "../produto/produto.service";


@Injectable({
  providedIn: 'root'
})

export class CatalogoService {

  private readonly API_url = `${environment.API_catalogo}`;

  constructor(protected http: HttpClient, private prodService: ProdutoService) { }


  loadByID(id: number) {
    return this.http.get<Catalogo>(`${this.API_url}/${id}`).pipe(take(1));
  }

  create(catalogo: Catalogo) {
    return this.http.post<Catalogo>(`${this.API_url}catalogo`, catalogo).pipe(take(1)).pipe(take(1));
  }

  listCatalogos(repId: number) {
    return this.http.get<Catalogo[]>(`${this.API_url}catalogo/representante/${repId}`).pipe(take(1)).pipe(take(1));
  }

  loadCatalogo(catId: number) {
    return this.http.get<Catalogo[]>(`${this.API_url}produto/catalogo/${catId}`).pipe(take(1)).pipe(take(1));
  }


  // loadByID(id: number) {
  //   return this.http.get<Catalogo>(`${this.API_url}/${id}`).pipe(take(1));
  // }
  //
  // create(catalogo: Catalogo) {
  //   return this.http.post<Catalogo>(`${this.API_url}catalogo`, catalogo).pipe(take(1)).pipe(take(1));
  // }
  //
  // listCatalogos(repId: number) {
  //   return this.http.get<Catalogo[]>(`${this.API_url}catalogo`).pipe(take(1)).pipe(take(1));
  // }
  //
  // loadCatalogo(catId: number) {
  //   return this.prodService.list();
  //   // return this.http.get<CatalogoInterface[]>(`${this.API_url}produto/catalogo/${catId}`).pipe(take(1)).pipe(take(1));
  // }

}
