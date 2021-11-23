import { Component, OnInit } from '@angular/core';
import {FornecedorService} from "../../../Service/fornecedor/fornecedor.service";
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

  fornecedor$: Observable<Fornecedor[]>;
  private mySubscription!: Subscription;

  constructor(private service: FornecedorService,private authService: AuthFornecedorService,
              private router: Router) {

    this.fornecedor$ = this.service.list().
      pipe(
        catchError(err => {
          return of([]);
        })
    );

  }

  ngOnInit(): void {

  }

  getPerfil(fornecedor: Fornecedor){
    this.authService.fazerLogin(fornecedor);

  }

  voltar() {
    this.router.navigate(['']);
  }

}
