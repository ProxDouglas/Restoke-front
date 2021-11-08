import { Component, OnInit } from '@angular/core';
import {FornecedorService} from "../../Service/fornecedor.service";
import {Fornecedor} from "../../Model/fornecedor.interface";
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fornecedores: Fornecedor[] = [];
  private service: FornecedorService;
  private authService: AuthService;
  fornecedor!: Fornecedor;

  constructor(service: FornecedorService, authService: AuthService) {
    this.service = service;
    this.authService = authService;
  }

  ngOnInit(): void {
    this.service.list().subscribe(dados => this.fornecedores = dados);
  }

  getPerfil(fornecedor: Fornecedor){
    this.authService.fazerLogin(fornecedor);
  }

}
