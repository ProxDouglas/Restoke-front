import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRepresentanteComponent } from './catalogo-representante/catalogo-representante.component';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from "@angular/flex-layout";

import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatTabsModule} from "@angular/material/tabs";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatChipsModule} from "@angular/material/chips";


import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatTooltipModule} from "@angular/material/tooltip";

import { DetailComponent } from './catalogo-representante/detail/detail/detail.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {ListCatalogoComponent} from "./list-catalogo/list-catalogo.component";
import {CatalogoContentRoutingModule} from "./catalogo-content.routing.module";

@NgModule({
  declarations: [
    CatalogoRepresentanteComponent,
    ListCatalogoComponent,
    DetailComponent,

  ],
  exports: [
    CatalogoRepresentanteComponent,
    ListCatalogoComponent,
    DetailComponent,
    CatalogoContentRoutingModule,

  ],
    imports: [

        CatalogoContentRoutingModule,

        CommonModule,
        MatCardModule,
        FlexLayoutModule,
        MatProgressSpinnerModule,
        MatTabsModule,
        MatProgressBarModule,
        MatChipsModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatIconModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        MatTooltipModule,
        MatGridListModule,
    ]
})
export class CatalogoContentModule { }
