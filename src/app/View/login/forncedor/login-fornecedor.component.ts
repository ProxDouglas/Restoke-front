import { Component, OnInit } from '@angular/core';
import {FornecedorService} from "../../../Service/fornecedor.service";
import {Fornecedor} from "../../../Model/fornecedor.interface";
import {AuthFornecedorService} from "../../../Service/auth/fornecedor/auth-fornecedor.service";
import {Observable, of, Subscription} from "rxjs";
import {catchError} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-fornecedor',
  templateUrl: './login-fornecedor.component.html',
  styleUrls: ['./login-fornecedor.component.css']
})
export class LoginFornecedorComponent implements OnInit {

  private service: FornecedorService;
  private authService: AuthFornecedorService;
  fornecedor$: Observable<Fornecedor[]>;
  router: Router;
  private mySubscription!: Subscription;

  constructor(service: FornecedorService, authService: AuthFornecedorService, router: Router) {
    this.service = service;
    this.authService = authService;
    this.router = router;
    this.fornecedor$ = this.service.list().
      pipe(
        catchError(err => {
          return of([]);
        })
    );

  }

  ngOnInit(): void {
    // const localSubscription = this.fornecedor$.subscribe(dados => this.fornecedores = dados);
    // setTimeout(() => {
    //   localSubscription.unsubscribe();
    // }, 10000);


    // const localSubscription = this.service.list().subscribe(dados => this.fornecedores = dados);
    // setTimeout(() => {
    //   localSubscription.unsubscribe();
    // }, 10000);
  }

  getPerfil(fornecedor: Fornecedor){
    this.authService.fazerLogin(fornecedor);

  }

  voltar() {
    this.router.navigate(['']);
  }

}
