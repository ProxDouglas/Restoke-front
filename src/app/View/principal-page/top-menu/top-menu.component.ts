import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthFornecedorService} from "../../../Service/auth/fornecedor/auth-fornecedor.service";
import {AuthRepresentanteService} from "../../../Service/auth/representante/auth-representante.service";

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  authFornecedor: boolean = false;
  authRepresentante: boolean = false;

  constructor(private router: Router,
              private authFornService: AuthFornecedorService,
              private authRepService: AuthRepresentanteService,
  ) {

  }

  ngOnInit(): void {
    this.authForn();
    this.authRep();
  }

  authForn(){
    this.authFornService.autenticado.subscribe(
      auth => this.authFornecedor = auth
    );
  }

  authRep(){
    this.authRepService.autenticado.subscribe(
      auth => this.authRepresentante = auth
    );
  }


  acessarArea(){
    // console.log('sessao');
    this.router.navigate(['sessao']);
  }

  cadastrar(){
    // console.log('cadastrou');
    this.router.navigate(['cadastro']);
  }

  acessMenu(){
    this.router.navigate(['']);
  }

  acessarForn() {
    this.router.navigate(['/fornecedor']);
  }

  sairForn() {
    this.authFornService.sairPerfil();
    // this.authFornecedor = false;
  }

  acessarRep() {
    this.router.navigate(['/representante']);
  }

  sairRep() {
    this.authRepService.sairPerfil();
    // this.authRepresentante = false;
  }
}
