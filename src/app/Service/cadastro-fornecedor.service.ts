import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {tap, catchError, retry, delay} from "rxjs/operators";

import {Fornecedor} from '../Model/fornecedor.interface';
import {environment} from "../../environments/environment";


/*
fornecedores: FornecedorModel[] = FORNECEDORES;
 */


@Injectable({
  providedIn: 'root'
})
export class CadastroFornecedor {

  //private readonly API = 'http://localhost:8080/api/internal/v1/fornecedores';

  private readonly API = `${environment.API}fornecedor`;

  constructor(private httpClient: HttpClient) {}

  httpOptions ={
    headers: new HttpHeaders({
      'ContentType': 'application/json'
    })
  };


  list() {
    return this.httpClient.get<Fornecedor[]>(this.API)
      .pipe(
        delay(2000),
        tap(console.log)
      );
  }

  insert(fornecedor: Fornecedor) : Observable<Fornecedor>{
    return this.httpClient.post<Fornecedor>(this.API, fornecedor, this.httpOptions)
      .pipe(
        tap(console.log),
        retry(3),
        catchError(this.handleError)
      )
  }

  update(fornecedor: Fornecedor) : Observable<Fornecedor>{
    return this.httpClient.put<Fornecedor>(this.API, fornecedor, this.httpOptions)
      .pipe(
        tap(console.log),
        retry(3),
        catchError(this.handleError)
      )
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  /*
  // Obtem todos os fornecedores
  getFornecedores(): Observable<FornecedorModel[]> {
    return this.httpClient.get<FornecedorModel[]>(this.API)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }


  // Obtem um fornecedor pelo id
  getFornecedorById(id: number): Observable<FornecedorModel> {
    return this.httpClient.get<FornecedorModel>(this.API + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // salva um FornecedorModel
  salvarFornecedor(fornecedor: FornecedorModel): Observable<FornecedorModel> {
    return this.httpClient.post<FornecedorModel>(this.API, JSON.stringify(FornecedorModel), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // utualiza um FornecedorModel
  updateFornecedor(fornecedor: FornecedorModel): Observable<FornecedorModel> {
    //console.log("update");
    return this.httpClient.put<FornecedorModel>(this.API  , JSON.stringify(FornecedorModel), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // deleta um FornecedorModel
  deleteFornecedor(fornecedor: FornecedorModel) {
    return this.httpClient.delete<FornecedorModel>(this.API + '/' + fornecedor.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

   */
}
