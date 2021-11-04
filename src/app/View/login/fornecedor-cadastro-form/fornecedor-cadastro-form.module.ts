import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { FornecedorCadastroFormComponent } from './fornecedor-cadastro-form.component';

import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";



@NgModule({
    declarations: [
        FornecedorCadastroFormComponent
    ],
    exports: [
        FornecedorCadastroFormComponent
    ],
  imports: [
    CommonModule,

    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCardModule,
    MatToolbarModule,

  ]
})
export class FornecedorCadastroFormModule { }
