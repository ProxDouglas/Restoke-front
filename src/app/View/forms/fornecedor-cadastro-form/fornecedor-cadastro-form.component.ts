import { Component, OnInit } from '@angular/core';

import {Fornecedor} from "../../../Model/fornecedor.interface";
//import {Fornecedor} from "../../../Model/fornecedo";
import {CadastroFornecedor} from "../../../Service/cadastro-fornecedor.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { cnpj } from 'cpf-cnpj-validator';
import {observable, Observable} from "rxjs";
import {take, tap} from "rxjs/operators";

@Component({
  selector: 'app-fornecedor-cadastro-form',
  templateUrl: './fornecedor-cadastro-form.component.html',
  styleUrls: ['./fornecedor-cadastro-form.component.css']
})
export class FornecedorCadastroFormComponent implements OnInit {
  submitted = false;
  form!: FormGroup ;
  fornecedores: Fornecedor[] = [];
  fornecedores$!: Observable<Fornecedor>;

  constructor(private fb: FormBuilder, private cadastroService: CadastroFornecedor) {}


  ngOnInit(): void {
    this.fornecedores$ = this.cadastroService.list()
      .pipe(
        tap(),
        take(1)
      );
    this.createForm();
    this.cadastroService.list().subscribe(dados => this.fornecedores = dados);
  }

  createForm(){
    this.form = this.fb.group({
      nomeFantasia: new FormControl (null, [Validators.required, Validators.maxLength(255), Validators.minLength(2)]),
      cnpj: new FormControl(null, [Validators.required, Validators.maxLength(14), Validators.minLength(14),
        Validators.pattern( '[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}')]),
      txtApresentacao: new FormControl(null, [ Validators.maxLength(255)]),
      fraseImpacto: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
      contatoFabrica: new FormControl(null, [Validators.required, Validators.maxLength(255), Validators.minLength(10)]),
      endereco: new FormControl(null, [Validators.required, Validators.maxLength(255), Validators.minLength(10)])
    });
  }

  hasError(field: string) {
    return this.form.get(field)?.errors;
  }

  cadastrarFornecedor(){
    return this.cadastroService.save(this.form.value as Fornecedor).subscribe();
  }

  cancelar(){

  }



  onSubmit() {
    console.warn(this.form.value);
    this.cadastrarFornecedor();
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('submit');

      let msgSuccess = 'Curso criado com sucesso!';
      let msgError = 'Erro ao criar curso, tente novamente!';
      if (this.form.value.id) {
        msgSuccess = 'Curso atualizado com sucesso!';
        msgError = 'Erro ao atualizar curso, tente novamente!';
      }

      this.cadastroService.save(this.form.value).subscribe(
        success => {
          alert("success");
          //this.modal.showAlertSuccess(msgSuccess);
          //this.location.back();
        },
        //error => this.modal.showAlertDanger(msgError)
        error => alert("erro")
      );
    }
  }


  onCancel() {
    this.submitted = false;
    this.form.reset();
    // console.log('onCancel');
  }
}


