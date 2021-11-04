import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

import {FornecedorCadastroFormModule} from "./fornecedor-cadastro-form/fornecedor-cadastro-form.module";
import {FornecedorCadastroFormComponent} from "./fornecedor-cadastro-form/fornecedor-cadastro-form.component";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatExpansionModule} from "@angular/material/expansion";
import {FlexLayoutModule} from "@angular/flex-layout";




@NgModule({
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent,
    FornecedorCadastroFormComponent,
  ],
  imports: [
    CommonModule,
    FornecedorCadastroFormModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    FlexLayoutModule,

  ]
})
export class LoginModule { }
