import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from "@angular/material/button";
import {RepresentanteComponent} from "./representante.component";
import {RepresentanteRoutingModule} from "./representante-routing.module";
import {CatalogoEditModule} from "./editar/catalogo-edit.module";


@NgModule({
  declarations: [
    RepresentanteComponent
  ],
  exports: [
    RepresentanteComponent,
    CatalogoEditModule
  ],
  imports: [
    CommonModule,
    RepresentanteRoutingModule,
    MatButtonModule,
    CatalogoEditModule
  ]
})
export class RepresentanteModule { }
