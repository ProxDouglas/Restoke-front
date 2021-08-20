import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-cadastro-form',
  templateUrl: './produto-cadastro-form.component.html',
  styleUrls: ['./produto-cadastro-form.component.css']
})
export class ProdutoCadastroFormComponent implements OnInit {
  nomeProduto: String = 'EX: Copo de plastico';
  nomeProduto2: String = '';


  constructor() { }

  ngOnInit(): void {
  }

  valueProdutoNome(nome: string){
    this.nomeProduto2 = nome;

  }

  valorEntrada: String = '';

  enterEventProduto(valor: String){
    this.valorEntrada = valor;
  }

}
