import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";

import { CommonModule } from '@angular/common';
import { PesquisaComponent } from './pesquisa.component';

import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatTooltipModule} from "@angular/material/tooltip";
import {FlexModule} from "@angular/flex-layout";



@NgModule({
  declarations: [
    PesquisaComponent
  ],
  exports: [
    PesquisaComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTooltipModule,
    FlexModule,
  ]
})
export class PesquisaModule { }
