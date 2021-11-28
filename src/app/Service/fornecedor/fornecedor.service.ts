import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, take, tap} from "rxjs/operators";

import {Fornecedor} from '../../Model/fornecedor.interface';
import {environment} from "../../../environments/environment";
import {CrudService} from "../../shered/crud-service";
import {Associar} from "../../Model/associar.interface";

/*
fornecedores: FornecedorModel[] = FORNECEDORES;
 */

@Injectable({
  providedIn: 'root'
})
export class FornecedorService extends CrudService<Fornecedor>{

  //private readonly API = 'http://localhost:8080/restoke/api/internal/vi/fornecedores';

  //private readonly API = `${environment.API}fornecedor`;

  constructor(protected http: HttpClient) {
    super(http, `${environment.API_cadastro}fornecedores`);
  }


  associar(idFor: number, idRep: number){

    const associar: Associar = {
      idFornecedor: idFor,
      idRepresentante: idRep
    }

    return this.http.post<Associar>(`${environment.API_cadastro}associacoes`, associar)
      .pipe(take(1), tap(console.log));
  }

  // httpOptions ={
  //   headers: new HttpHeaders({
  //     'ContentType': 'application/json'
  //   })
  // };

}
