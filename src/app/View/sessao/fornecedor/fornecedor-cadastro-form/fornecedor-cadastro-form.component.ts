import { Component, OnInit } from '@angular/core';

import {Fornecedor} from "../../../../Model/fornecedor.interface";

import {FornecedorService} from "../../../../Service/fornecedor.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { cnpj } from 'cpf-cnpj-validator';
import {observable, Observable, Subscription} from "rxjs";
import {take, tap} from "rxjs/operators";
import {Router} from "@angular/router";
import {AuthFornecedorService} from "../../../../Service/auth/fornecedor/auth-fornecedor.service";

@Component({
  selector: 'app-fornecedor-cadastro-form',
  templateUrl: './fornecedor-cadastro-form.component.html',
  styleUrls: ['./fornecedor-cadastro-form.component.css']
})
export class FornecedorCadastroFormComponent implements OnInit {
  submitted = false;
  form: FormGroup ;
  fornecedores: Fornecedor[] = [];
  fornecedores$: Observable<Fornecedor>;
  private router: Router;
  private authService;

  constructor(
    private fb: FormBuilder,
    private cadastroService: FornecedorService,
    router: Router,
    authService: AuthFornecedorService) {

    this.authService = authService;
    this.router = router;
    this.form = this.createForm();
    this.fornecedores$ = new Observable<Fornecedor>();

  }


  ngOnInit(): void {
    // this.fornecedores$ = this.cadastroService.list()
    //   .pipe(
    //     tap(),
    //     take(1)
    //   );
    // this.cadastroService.list().subscribe(dados => this.fornecedores = dados);

  }

  createForm(): FormGroup{
    return this.fb.group({
      nome: new FormControl ("Morgado ltda",
        [Validators.required, Validators.maxLength(150), Validators.minLength(2)]),
      nomeFantasia: new FormControl ("Morgado Orientador",
        [Validators.required, Validators.maxLength(150), Validators.minLength(2)]),
      cnpj: new FormControl("00000000000100",
        [Validators.required, Validators.maxLength(18), Validators.minLength(14),
        Validators.pattern( '[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{4}[0-9]{2}|[0-9]{2}.[0-9]{3}.[0-9]{3}\/[0-9]{4}-[0-9]{2}')]),
      txtApresentacao: new FormControl("Ajudo aluno em computação",
        [ Validators.maxLength(255)]),
      fraseImpacto: new FormControl("Faça o TCC e crie sua própria start-up",
        [Validators.required, Validators.maxLength(255)]),
      endereco: new FormControl("morgado@pucsp.edu.br",
        [Validators.required, Validators.maxLength(255), Validators.minLength(10)]),
      email: new FormControl ("morgado@pucsp.edu.br",
        [Validators.required, Validators.maxLength(100),
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      contatoFabrica: new FormControl(1122222222,
        [Validators.required, Validators.maxLength(255), Validators.minLength(10)]),
      numContato: new FormControl ("1122222224",
        [Validators.required, Validators.maxLength(11), Validators.minLength(10),
          Validators.pattern('([0-9]{2})([0-9]{5}-?[0-9]{4}|[0-9]{4}-?[0-9]{4})')]),
      site: new FormControl ("morgado.com",
        [Validators.required, Validators.maxLength(255), Validators.minLength(2)])
    });
  }

  hasError(field: string) {
    return this.form.get(field)?.errors;
  }

  fornecedorMap(dados: any){
    let fornecedor: Fornecedor = {
      id: (dados as any).id ,
      cnpj: (dados as any).cnpj ,
      nome: (dados as any).nome,
      nomeFantasia: (dados as any).nomeFantasia ,
      txtApresentacao: (dados as any).txtApresentacao ,
      fraseImpacto: (dados as any).fraseImpacto ,
      contatoFabrica: (dados as any).contatoFabrica , //?????
      endereco: (dados as any).endereco ,
      email: (dados as any).email ,
      numContato: (dados as any).numContato ,
      site: (dados as any).site ,
    }
    return fornecedor;
  }

  onSubmit(){
    this.submitted = true;

    let msgSuccess = 'Distribuidor criado com sucesso!';
    let msgError = 'Erro ao criar distribuidor, tente novamente!';

    this.fornecedores$ = this.cadastroService.save(this.form.value as Fornecedor) as Observable<Fornecedor>;

    if(this.form.valid) {
      const localSubscription = this.fornecedores$.subscribe(
        (dados: Fornecedor) => {

          this.authService.fazerLogin(this.fornecedorMap(dados));

          alert(msgSuccess);
          // this.modal.showAlertSuccess(msgSuccess);
          // this.location.back();
        },
        //error => this.modal.showAlertDanger(msgError)
        error => {
          console.log(error);
          alert(msgError);
        }
      );

      setTimeout(() => {
        localSubscription.unsubscribe();
      }, 10000);

    }


  }


  onCancel() {
    this.submitted = false;
    this.form.reset();
    this.router.navigate(['']);
  }

}


