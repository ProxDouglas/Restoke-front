import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../login/auth.service";
import {Fornecedor} from "../../Model/fornecedor.interface";

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {
  private  authService: AuthService;

  fornecedor!: Fornecedor;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  ngOnInit(): void {
    this.fornecedor = this.authService.getPerfil() as Fornecedor;
  }







}
