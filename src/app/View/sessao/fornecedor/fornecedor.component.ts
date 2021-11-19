import {Component, Input, OnInit} from '@angular/core';
import {AuthFornecedorService} from "../../../Service/auth/fornecedor/auth-fornecedor.service";
import {Fornecedor} from "../../../Model/fornecedor.interface";

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {
  private  authService: AuthFornecedorService;

  fornecedor!: Fornecedor;

  constructor(authService: AuthFornecedorService) {
    this.authService = authService;
  }

  ngOnInit(): void {
    this.fornecedor = this.authService.getPerfil() as Fornecedor;
  }







}
