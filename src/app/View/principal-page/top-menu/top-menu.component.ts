import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthFornecedorService} from "../../../Service/auth/fornecedor/auth-fornecedor.service";

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  router!: Router;
  private authService: AuthFornecedorService;

  autenticado: boolean = false;

  constructor(router: Router, authService: AuthFornecedorService) {
    this.router = router;
    this.authService = authService;
  }

  ngOnInit(): void {
    this.autenticado = this.authService.usuarioEstaAutenticado();
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

  sair() {
    this.authService.sairPerfil();
    this.autenticado = false;
  }


  get autenticadoT(): boolean {
    return this.autenticado;
  }
}
