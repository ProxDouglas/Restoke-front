import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";

import {HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders, HttpRequest} from "@angular/common/http";
import {Representante} from "../../Model/representante.interface";

import {Observable, throwError} from "rxjs";
import {catchError, delay, retry, take, tap, map} from "rxjs/operators";
import {CrudService} from "../../shered/crud-service";


@Injectable({
  providedIn: 'root'
})
export class RepresentanteService extends CrudService<Representante>{

  //private readonly API = 'http://localhost:8080/api/internal/v1/representante';

  private API = `${environment.API_cadastro}representantes`;

  constructor(protected http: HttpClient) {
    super(http, `${environment.API_cadastro}` + 'representantes');
  }

  loadByName(representante: Representante): Observable<Representante> {
    return this.http.get<Representante>(`${this.API}/${representante.nome}`)
      .pipe(take(1));
  }

  loadByCPF(cpf: string): Observable<Representante> {
    return this.http.get<Representante>(`${this.API}?cpf=${cpf}`)
      .pipe(map((data: Representante) => {return data}));
  }

  pushImage(foto: File, id: number){
    const formData = new FormData();
    formData.append('imagem', foto);

    return this.http.post(`${environment.API_cadastro}representantes/${id}/imagem`, formData);
  }

  httpOptions ={
    headers: new HttpHeaders({
      'ContentType': 'application/json'
    })
  };

}
