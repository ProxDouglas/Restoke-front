import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";


@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  valorAtual: String = '';
  valorSalvo: String = '';
  valorEntrada: String = '';

  constructor() { }

  ngOnInit(): void {
  }

  message = new FormControl();

  enterEvent(valor: String){
    this.valorEntrada = valor;
  }

  salvarValor(valor: String){
    this.valorSalvo = valor;
  }

  onKeyUp(evento: KeyboardEvent){
    console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }


}
