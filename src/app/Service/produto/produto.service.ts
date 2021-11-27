import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {delay, take, tap} from "rxjs/operators";

import {Produto} from "../../Model/produto.interface";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ProdutoService{

  private readonly API_URL = `${environment.API_cadastro}produtos`;

  constructor(protected http: HttpClient) {

  }

  list() {
    return this.http.get<Produto[]>(this.API_URL)
      .pipe(
        delay(500),
        tap((obj:any) => obj)
        // tap(console.log)
      );
  }

  loadByID(id: number): Observable<Produto>{
    return this.http.get<Produto>(`${this.API_URL}/${id}`).pipe(take(1));
  }

  private create(record: Produto) {
    return this.http.post(this.API_URL, record).pipe(take(1)).pipe(
      // tap(dados => console.log(record as T))
    );
  }

  private update(record: Produto) {
    return this.http.put(`${this.API_URL}/${record.id}`, record).pipe(take(1));
  }

  save(record: Produto) {
    if (record.id) {
      return this.update(record);
    }
    return this.create(record);
  }

  remove(id: number) {
    return this.http.delete(`${this.API_URL}/${id}`).pipe(take(1));
  }

  loadByNmae(name: string){
    return this.http.get<Produto>(`${this.API_URL}/${name}` ).pipe(take(1));
  }

  loadByCB(cb: string){
    return this.http.get<Produto>(`${this.API_URL}/${cb}` ).pipe(take(1));
  }

  listFabProd(idFornecedor: number){
    return this.http.get<Produto[]>(`${this.API_URL}/produtos/fornecedores/{id}`)
      .pipe(
        // delay(2000),
        tap(obj => obj)
        // tap(console.log)
      );
  }

}
