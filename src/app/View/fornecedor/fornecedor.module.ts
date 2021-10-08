import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FornecedorComponent } from './fornecedor.component';
import {FornecedorRoutingModule} from "./fornecedor-routing.module";
import {RepresentanteCadastroFormModule} from "./Forms/representante-cadastro-form/representante-cadastro-form.module";
import {RepresentanteCadastroFormComponent} from "./Forms/representante-cadastro-form/representante-cadastro-form.component";
import {UploadImageComponent} from "./Forms/representante-cadastro-form/upload-image/upload-image.component";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    FornecedorComponent
  ],
  exports: [
    FornecedorComponent,
    RepresentanteCadastroFormComponent,
    UploadImageComponent,

  ],
  imports: [
    CommonModule,
    RepresentanteCadastroFormModule,
    FornecedorRoutingModule,
    MatButtonModule,
  ]
})
export class FornecedorModule { }
