import { Component, OnInit } from '@angular/core';

import {Fornecedor} from "../../../Model/fornecedor.model";
import {CadastroFornecedor} from "../../../Service/cadastro-fornecedor.service";

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

  fornecedor: Fornecedor = new Fornecedor();

  constructor(private cadastroFor: CadastroFornecedor) { }

  ngOnInit(): void {
    //this.CadastroFornecedorService

  }

  createModel(){
    this.fornecedor.nomeFantasia = this.nomeFantasia;
    this.fornecedor.cnpj = this.cnpj;
    this.fornecedor.txt_apresentacao = this.txt_apresentacao;
    this.fornecedor.frase_impacto = this.frase_impacto;
    this.fornecedor.contatoFabrica = this.contatoFabrica;
    this.fornecedor.endereco = this.endereco;
    return this.fornecedor;
  }

  enviar(){
    //updateFornecedor(this.createModel());
    this.cadastroFor.updateFornecedor(this.createModel());
  }

}
