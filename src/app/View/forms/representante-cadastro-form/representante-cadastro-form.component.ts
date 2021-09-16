import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CadastroRepresentante} from "../../../Service/cadastro-representante.service";
import {Fornecedor} from "../../../Model/fornecedor.interface";
import {Observable} from "rxjs";
import {Representante} from "../../../Model/representante.interface";
import {take, tap} from "rxjs/operators";
import { cpf } from 'cpf-cnpj-validator';

@Component({
  selector: 'app-representante-cadastro-form',
  templateUrl: './representante-cadastro-form.component.html',
  styleUrls: ['./representante-cadastro-form.component.css']
})
export class RepresentanteCadastroFormComponent implements OnInit {

  form!: FormGroup ;
  representantes: Representante[] = [];
  representantes$!: Observable<Representante>;

  constructor(private fb: FormBuilder, private cadastroService: CadastroRepresentante) { }

  ngOnInit(): void {
    this.createForm();

    this.representantes$ = this.cadastroService.list()
      .pipe(
        tap(),
        take(1)
      );


  }

  createForm(){
    this.form = this.fb.group({
      nome: new FormControl (null, [Validators.required, Validators.maxLength(255), Validators.minLength(2)]),
      cpf: new FormControl(null, [Validators.required, Validators.maxLength(14), Validators.minLength(14),
        Validators.pattern( '([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})')]),
      telefone: new FormControl(null, [ Validators.maxLength(255)]),
      email: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
      apresentacao: new FormControl(null, [Validators.required, Validators.maxLength(255), Validators.minLength(10)]),

    });
  }

  cadastrarFornecedor(){
    return this.cadastroService.save(this.form.value as Representante).subscribe();

  }

  salvar(){
    console.warn(this.form.value);
    this.cadastrarFornecedor();
  }

  cancelar(){
    this.cadastroService.list().subscribe(dados => this.representantes = dados);
  }

}
