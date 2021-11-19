import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRepresentanteComponent } from './login-representante.component';

import {FornecedorCadastroFormModule} from "../../sessao/fornecedor/fornecedor-cadastro-form/fornecedor-cadastro-form.module";
import {FornecedorCadastroFormComponent} from "../../sessao/fornecedor/fornecedor-cadastro-form/fornecedor-cadastro-form.component";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatExpansionModule} from "@angular/material/expansion";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";




@NgModule({
  declarations: [
    LoginRepresentanteComponent
  ],
  exports: [
    LoginRepresentanteComponent,
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
    MatProgressSpinnerModule,

  ]
})
export class LoginRepresentanteModule { }
