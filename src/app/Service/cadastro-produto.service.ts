import { Injectable } from '@angular/core';
import {CrudService} from "../shered/crud-service";
import {Representante} from "../Model/representante.interface";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {take} from "rxjs/operators";

import {Produto} from "../Model/produto.interface";


@Injectable({
  providedIn: 'root'
})
export class CadastroProdutoService extends CrudService<Representante> {

  //private readonly API = 'http://localhost:8080/api/internal/v1/representante';

  private API = `${environment.API}Representante`;

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}` + 'Produto');
  }

  loadByNmae(name: string){
    return this.http.get<Produto>(`${this.API}/${name}` ).pipe(take(1));
  }

  loadByCB(cb: string){
    return this.http.get<Produto>(`${this.API}/${cb}` ).pipe(take(1));
  }

}
