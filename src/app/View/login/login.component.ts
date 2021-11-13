import { Component, OnInit } from '@angular/core';
import {FornecedorService} from "../../Service/fornecedor.service";
import {Fornecedor} from "../../Model/fornecedor.interface";
import {AuthService} from "../../Service/auth.service";
import {Observable, of, Subscription} from "rxjs";
import {catchError} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fornecedores: Fornecedor[] = [];
  private service: FornecedorService;
  private authService: AuthService;
  fornecedor$: Observable<Fornecedor[]>;
  router: Router;
  private mySubscription!: Subscription;

  constructor(service: FornecedorService, authService: AuthService, router: Router) {
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
    const localSubscription = this.fornecedor$.subscribe(dados => this.fornecedores = dados);
    setTimeout(() => {
      localSubscription.unsubscribe();
    }, 10000);


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
