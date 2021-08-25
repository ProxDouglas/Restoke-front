import { Component, OnInit } from '@angular/core';

import {Fornecedor} from "../../../Model/fornecedor.model";
import {CadastroFornecedor} from "../../../Service/cadastro-fornecedor.service";
import {observable, Observable} from "rxjs";
import {take, tap} from "rxjs/operators";

@Component({
  selector: 'app-fornecedor-cadastro-form',
  templateUrl: './fornecedor-cadastro-form.component.html',
  styleUrls: ['./fornecedor-cadastro-form.component.css']
})
export class FornecedorCadastroFormComponent implements OnInit {

  id: number = 0;
  cnpj: string = '';
  nomeFantasia: string = '';
  txt_apresentacao: string = '';
  frase_impacto: string = '';
  contatoFabrica: string = '';
  endereco: string = '';
  //email: string = '';
  //numContato: string = '';
  //site: string = '';

  //fornecedores: Fornecedor[] = [];

  fornecedores$: Observable<Fornecedor[]> | undefined ;

  constructor(private cadastroService: CadastroFornecedor) {

  }

  ngOnInit(): void {
    this.fornecedores$ = this.cadastroService.list()
      .pipe(
        tap(),
        take(1)
      );
  }

  /*createModel(){
    this.fornecedor.nomeFantasia = this.nomeFantasia;
    this.fornecedor.cnpj = this.cnpj;
    this.fornecedor.txt_apresentacao = this.txt_apresentacao;
    this.fornecedor.frase_impacto = this.frase_impacto;
    this.fornecedor.contatoFabrica = this.contatoFabrica;
    this.fornecedor.endereco = this.endereco;
    return this.fornecedor;
  }*/

  enviar(){
    //updateFornecedor(this.createModel());
    //this.cadastroService.updateFornecedor(this.createModel()).subscribe();
    this.cadastroService.list();

  }

}
