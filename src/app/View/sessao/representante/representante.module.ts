import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from "@angular/material/button";
import {RepresentanteComponent} from "./representante.component";
import {RepresentanteCadastroFormModule} from "../fornecedor/forms/representante-crud/representante-cadastro-form.module";
import {RepresentanteRoutingModule} from "./representante-routing.module";


@NgModule({
  declarations: [
    RepresentanteComponent
  ],
  exports: [
    RepresentanteComponent,
  ],
  imports: [
    CommonModule,
    RepresentanteCadastroFormModule,
    RepresentanteRoutingModule,
    MatButtonModule,
  ]
})
export class RepresentanteModule { }
