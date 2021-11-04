import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { RepresentanteCadastroFormComponent } from './representante-cadastro-form.component';
import {UploadImageComponent} from "./upload-image/upload-image.component";


import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    RepresentanteCadastroFormComponent,
    UploadImageComponent
  ],
  exports:[
    RepresentanteCadastroFormComponent,
    UploadImageComponent
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
    ]
})
export class RepresentanteCadastroFormModule { }
