import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {tap, catchError, retry, delay} from "rxjs/operators";

import {Fornecedor} from '../../Model/fornecedor.interface';
import {environment} from "../../../environments/environment";
import {CrudService} from "../../shered/crud-service";


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

  // httpOptions ={
  //   headers: new HttpHeaders({
  //     'ContentType': 'application/json'
  //   })
  // };

}
