import { Component, OnInit } from '@angular/core';

//import {Fornecedor} from "../../../Model/fornecedor.interface";
import {Fornecedor} from "../../../Model/fornecedo";
import {CadastroFornecedor} from "../../../Service/cadastro-fornecedor.service";
import {observable, Observable} from "rxjs";
import {take, tap} from "rxjs/operators";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-fornecedor-cadastro-form',
  templateUrl: './fornecedor-cadastro-form.component.html',
  styleUrls: ['./fornecedor-cadastro-form.component.css']
})
export class FornecedorCadastroFormComponent implements OnInit {

  form!: FormGroup ;

  constructor(private fb: FormBuilder, private cadastroService: CadastroFornecedor) {

  }

  ngOnInit(): void {
    /*this.fornecedores$ = this.cadastroService.list()
      .pipe(
        tap(),
        take(1)
      );*/

    this.createForm(new Fornecedor);

  }

  createForm(fornecedor: Fornecedor){
    this.form = this.fb.group({
      nomeFantasia: new FormControl (fornecedor.nomeFantasia, [Validators.required, Validators.maxLength(255), Validators.minLength(2)]),
      cnpj: new FormControl(null, [Validators.required, Validators.maxLength(18), Validators.minLength(18)]),
      txtApresentacao: new FormControl(null, [ Validators.maxLength(255)]),
      fraseImpacto: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
      contatoFabrica: new FormControl(null, [Validators.required, Validators.maxLength(255), Validators.minLength(10)]),
      endereco: new FormControl(null, [Validators.required, Validators.maxLength(255), Validators.minLength(10)])
    });
  }

  // createModel(){
  //
  //   return this.fornecedor;
  // }

  salvar(){
    console.warn(this.form.value);
    //updateFornecedor(this.createModel());
    //this.cadastroService.updateFornecedor(this.createModel()).subscribe();
    //this.cadastroService.list();

    // this.fornecedor$ = this.cadastroService.update(this.createModel())
    //   .pipe(
    //     tap(),
    //     take(1)
    //   );

  }

  cancelar(){

  }

  submitted = false;
  onSubmit() {
    this.submitted = true;
  }

}
