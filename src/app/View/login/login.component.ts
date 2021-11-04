import { Component, OnInit } from '@angular/core';
import {FornecedorService} from "../../Service/fornecedor.service";
import {Fornecedor} from "../../Model/fornecedor.interface";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fornecedores: Fornecedor[] = [];
  private service: FornecedorService;
  fornecedor!: Fornecedor;

  constructor(service: FornecedorService) {
    this.service = service;
  }

  ngOnInit(): void {
    this.service.list().subscribe(dados => this.fornecedores = dados);
  }

  getPerfil(fornecedor: Fornecedor){
    console.log(fornecedor);
  }

}
