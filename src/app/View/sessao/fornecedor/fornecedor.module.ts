import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FornecedorComponent } from './fornecedor.component';
import {FornecedorRoutingModule} from "./fornecedor-routing.module";
import {RepresentanteModule} from "./manipulacao/representante/representante.module";

import {MatButtonModule} from "@angular/material/button";
import {ProdutoCrudModule} from "./manipulacao/produto-crud/produto-crud.module";



@NgModule({
  declarations: [
    FornecedorComponent,
  ],
  exports: [
    FornecedorComponent,
    RepresentanteModule,
    ProdutoCrudModule,
    FornecedorRoutingModule

  ],
  imports: [
    CommonModule,
    RepresentanteModule,
    FornecedorRoutingModule,


    MatButtonModule,
  ]
})
export class FornecedorModule { }
