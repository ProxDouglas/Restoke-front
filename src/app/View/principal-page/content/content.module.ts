import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentComponent } from './content.component';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from "@angular/flex-layout";

import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatTabsModule} from "@angular/material/tabs";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatChipsModule} from "@angular/material/chips";
import {PesquisaModule} from "./pesquisa/pesquisa.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatTooltipModule} from "@angular/material/tooltip";
import {CatalogoContentModule} from "./catalogo/catalogo-content.module";

@NgModule({
  declarations: [
    ContentComponent
  ],
  exports: [
    ContentComponent,
    CatalogoContentModule,
  ],
  imports: [
    CatalogoContentModule,
    PesquisaModule,



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
  ]
})
export class ContentModule { }
