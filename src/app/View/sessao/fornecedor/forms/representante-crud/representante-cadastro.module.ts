import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { RepresentanteCadastroComponent } from './representante-cadastro.component';



import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";



@NgModule({
  declarations: [
    RepresentanteCadastroComponent,

  ],
  exports:[
    RepresentanteCadastroComponent,

  ],
    imports: [
        CommonModule,

        MatInputModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,


        MatCardModule,
        MatToolbarModule,
        RouterModule,
        FlexLayoutModule,
    ]
})
export class RepresentanteCadastroModule { }
