import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Representante} from "../Model/representante.interface";

import {Observable, throwError} from "rxjs";
import {catchError, delay, retry, tap} from "rxjs/operators";
import {CrudService} from "../shered/crud-service";


@Injectable({
  providedIn: 'root'
})
export class CadastroRepresentante extends CrudService<Representante>{

  //private readonly API = 'http://localhost:8080/api/internal/v1/representante';

  //private readonly API = `${environment.API}fornecedor`;

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}representante`);
  }

  httpOptions ={
    headers: new HttpHeaders({
      'ContentType': 'application/json'
    })
  };

}
