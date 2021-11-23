import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FornecedorComponent } from './fornecedor.component';
import {FornecedorRoutingModule} from "./fornecedor-routing.module";
import {RepresentanteCadastroFormModule} from "./forms/representante-crud/representante-cadastro-form.module";
import {RepresentanteCadastroFormComponent} from "./forms/representante-crud/representante-cadastro-form.component";
import {UploadImageComponent} from "./forms/representante-crud/upload-image/upload-image.component";
import {MatButtonModule} from "@angular/material/button";
import {ProdutoCrudModule} from "./forms/produto-crud/produto-crud.module";



@NgModule({
  declarations: [
    FornecedorComponent
  ],
  exports: [
    FornecedorComponent,
    RepresentanteCadastroFormModule,
    UploadImageComponent,
    ProdutoCrudModule,
    FornecedorRoutingModule

  ],
  imports: [
    CommonModule,
    RepresentanteCadastroFormModule,
    FornecedorRoutingModule,


    MatButtonModule,
  ]
})
export class FornecedorModule { }
