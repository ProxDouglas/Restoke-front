import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";

import {HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders, HttpRequest} from "@angular/common/http";
import {Representante} from "../../Model/representante.interface";

import {Observable, of, throwError} from "rxjs";
import {catchError, delay, retry, take, tap, map} from "rxjs/operators";
import {CrudService} from "../../shered/crud-service";


@Injectable({
  providedIn: 'root'
})
export class RepresentanteService{

  //private readonly API = 'http://localhost:8080/api/internal/v1/representante';

  private API_url = `${environment.API_cadastro}represntantes`;

  constructor(protected http: HttpClient) {

  }

  list(): Observable<Representante[]> {
    return this.http.get<Representante[]>(this.API_url)
      .pipe(
        // delay(500),
        tap(console.log)
      );
  }

  loadByID(id: number) {
    return this.http.get<Representante>(`${this.API_url}/${id}`).pipe(take(1));
  }

  private create(record: Representante) {
    return this.http.post(this.API_url, record).pipe(take(1)).pipe(
      // tap(dados => console.log(record as T))
    );
  }

  private update(record: Representante) {
    return this.http.put(`${this.API_url}/${record.id}`, record).pipe(take(1));
  }

  save(record: Representante) {
    if (record.id) {
      return this.update(record);
    }
    return this.create(record);
  }

  remove(id: number) {
    return this.http.delete(`${this.API_url}/${id}`).pipe(take(1));
  }

  loadByName(representante: Representante): Observable<Representante> {
    return this.http.get<Representante>(`${this.API_url}/${representante.nome}`)
      .pipe(take(1));
  }

  // loadByCPF(cpf: string): Observable<Representante> {
  //   return this.http.get<Representante>(`${this.API_url}?cpf=${cpf}`)
  //     .pipe(map((data: Representante) => {return data}));
  // }

  loadByCPF(cpf: string): Observable<Representante[]> {
    if (!cpf) {
      // if not search term, return empty hero array.
      return of([]);
    }
    // return this.http.get<Representante[]>(`${this.API_url}/?cpf=${cpf}`).pipe(
    return this.http.get<Representante[]>(`${this.API_url}`).pipe(
      tap(x=>  {
          let i = 0;
          while(i< x.length) {
            if (x[i].cpf == cpf) {
              return of(x[i].cpf);
            }
          }
          return of([]);
        }
      )
    );
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
