import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoCadastroFormComponent } from './produto-cadastro-form.component';


import {MatInputModule} from '@angular/material/input';
import {FormControl, FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";

import {MatTooltipModule} from "@angular/material/tooltip";
import {FlexModule} from "@angular/flex-layout";



@NgModule({
    declarations: [
        ProdutoCadastroFormComponent
    ],
    exports: [
        ProdutoCadastroFormComponent
    ],
  imports: [
    CommonModule,

    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class ProdutoCadastroFormModule {

}
