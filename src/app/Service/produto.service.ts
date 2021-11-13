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
export class ProdutoService extends CrudService<Produto> {

  //private readonly API = 'http://localhost:8080/api/internal/v1/representante';

  private readonly API = `${environment.API}produtos`;

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}` + 'produtos');
  }

  loadByNmae(name: string){
    return this.http.get<Produto>(`${this.API}/${name}` ).pipe(take(1));
  }

  loadByCB(cb: string){
    return this.http.get<Produto>(`${this.API}/${cb}` ).pipe(take(1));
  }

  pushImage(foto: File, id: number){
    const formData = new FormData();
    formData.append('imagem', foto);

    return this.http.post(`${environment.API}produtos/${id}/imagem`, formData);
    // return this.http.post(`${environment.API}imagens`, formData);
  }

  updateImage(foto: File, id: number){
    const formData = new FormData();
    formData.append('imagem', foto);

    return this.http.put(`${environment.API}produtos/${id}/imagem`, formData);
    // return this.http.post(`${environment.API}imagens`, formData);
  }

}
