import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FornecedorComponent } from './fornecedor.component';
import {FornecedorRoutingModule} from "./fornecedor-routing.module";
import {RepresentanteCadastroModule} from "./forms/representante-crud/representante-cadastro.module";

import {MatButtonModule} from "@angular/material/button";
import {ProdutoCrudModule} from "./forms/produto-crud/produto-crud.module";



@NgModule({
  declarations: [
    FornecedorComponent,
  ],
  exports: [
    FornecedorComponent,
    RepresentanteCadastroModule,
    ProdutoCrudModule,
    FornecedorRoutingModule

  ],
  imports: [
    CommonModule,
    RepresentanteCadastroModule,
    FornecedorRoutingModule,


    MatButtonModule,
  ]
})
export class FornecedorModule { }
