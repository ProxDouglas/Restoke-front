import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";

import {Fornecedor} from '../Model/fornecedor.model';



/*const FORNECEDORES: Fornecedor[] = [
  {id:1, cnpj:'00.000.000/0001-00', nomeFantasia: 'Amazon', txt_apresentação:'macoratti@yahoo.com',frase_impacto:'oi1', contatoFabrica:  '(00) 9987-9088', endereco:'ed1'},
  {id:2, cnpj:'00.000.000/0001-00', nomeFantasia: 'Americanas', txt_apresentação:'paulolima@yahoo.com',frase_impacto:'oi2', contatoFabrica:  '(00) 9987-9088', endereco:'ed2'},
  {id:3, cnpj:'00.000.000/0001-00', nomeFantasia: 'Saraiva', txt_apresentação:'suzana@net.com',frase_impacto:'oi3', contatoFabrica:  '(00) 9987-9088', endereco:'ed3'},
  {id:4, cnpj:'00.000.000/0001-00', nomeFantasia: 'ebay', txt_apresentação:'paolafernand@hotmail.com',frase_impacto:'oi4', contatoFabrica: '(00) 9987-9088', endereco:'ed4'},
  {id:5, cnpj:'00.000.000/0001-00', nomeFantasia: 'Magazine', txt_apresentação:'amelia@bol.com.br',frase_impacto:'oi5', contatoFabrica: '(00) 9987-9088', endereco:'ed5'}
];

fornecedores: Fornecedor[] = FORNECEDORES;
 */


@Injectable({
  providedIn: 'root'
})
export class CadastroFornecedor {



  apiUrl = 'http://localhost:8080/api/internal/v1/fornecedores';

  constructor(
    private httpClient: HttpClient
  ) {}

  httpOptions ={
    headers: new HttpHeaders({
      'ContentType': 'application/json'
    })
  };


  // Obtem todos os fornecedores
  getFornecedores(): Observable<Fornecedor[]> {
    return this.httpClient.get<Fornecedor[]>(this.apiUrl)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }


  // Obtem um fornecedor pelo id
  getFornecedorById(id: number): Observable<Fornecedor> {
    return this.httpClient.get<Fornecedor>(this.apiUrl + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // salva um Fornecedor
  salvarFornecedor(fornecedor: Fornecedor): Observable<Fornecedor> {
    return this.httpClient.post<Fornecedor>(this.apiUrl, JSON.stringify(Fornecedor), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // utualiza um Fornecedor
  updateFornecedor(fornecedor: Fornecedor): Observable<Fornecedor> {
    console.log("update");
    return this.httpClient.put<Fornecedor>(this.apiUrl + '/' , JSON.stringify(Fornecedor), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // deleta um Fornecedor
  deleteFornecedor(fornecedor: Fornecedor) {
    return this.httpClient.delete<Fornecedor>(this.apiUrl + '/' + fornecedor.id, this.httpOptions)
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
}
