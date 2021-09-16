import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepresentanteCadastroFormComponent } from './representante-cadastro-form.component';

import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    RepresentanteCadastroFormComponent
  ],
  exports:[
    RepresentanteCadastroFormComponent
  ],
  imports: [
    CommonModule,

    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
  ]
})
export class RepresentanteCadastroFormModule { }
