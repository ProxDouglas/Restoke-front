import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../Service/auth.service";

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  router!: Router;
  private authService: AuthService;

  autenticado: boolean = false;

  constructor(router: Router, authService: AuthService) {
    this.router = router;
    this.authService = authService;
  }

  ngOnInit(): void {
    this.autenticado = this.authService.usuarioEstaAutenticado();
  }

  acessarArea(){
    console.log('acessar');
    this.router.navigate(['acessar']);
  }

  cadastrar(){
    console.log('cadastrou');
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
