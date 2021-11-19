import { Component, OnInit } from '@angular/core';
import { Observable} from "rxjs";
import {Router} from "@angular/router";
import {catchError} from "rxjs/operators";

import {Representante} from "../../../Model/representante.interface";
import {AuthRepresentanteService} from "../../../Service/auth/representante/auth-representante.service";
import {RepresentanteService} from "../../../Service/representante.service";

@Component({
  selector: 'app-login-represemtante',
  templateUrl: './login-representante.component.html',
  styleUrls: ['./login-representante.component.css']
})
export class LoginRepresentanteComponent implements OnInit {

  representante$: Observable<Representante[]>;

  constructor(private service: RepresentanteService,
              private authService: AuthRepresentanteService,
              private router: Router) {

    this.representante$ = this.refresh();

  }

  ngOnInit(): void {
    // const localSubscription = this.fornecedor$.subscribe(dados => this.fornecedores = dados);
    // setTimeout(() => {
    //   localSubscription.unsubscribe();
    // }, 10000);
  }

  refresh(): Observable<Representante[]>{
    return <any>this.service.list().pipe(
      // map(),
      // tap(),
      // switchMap(),
      catchError(error => {
        console.error(error);
        // this.error$.next(true);
        //this.handleError();
        return error;
      })
    );
  }

  getPerfil(representante: Representante){
    this.authService.fazerLogin(representante);

  }

  voltar() {
    this.router.navigate(['']);
  }

}
