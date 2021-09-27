import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FornecedorComponent } from './fornecedor.component';
import {FornecedorRoutingModule} from "./fornecedor-routing.module";



@NgModule({
  declarations: [
    FornecedorComponent
  ],
  exports: [
    FornecedorComponent,
  ],
  imports: [
    CommonModule,

    FornecedorRoutingModule,
  ]
})
export class FornecedorModule { }
