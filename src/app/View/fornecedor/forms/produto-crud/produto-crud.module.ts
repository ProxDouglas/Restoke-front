import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';


import {MatInputModule} from '@angular/material/input';
import {FormControl, FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";

import {MatTooltipModule} from "@angular/material/tooltip";
import {FlexLayoutModule, FlexModule} from "@angular/flex-layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {ProdutoUpdateComponent} from "./produto-update/produto-update.component";



@NgModule({
    declarations: [
        ProdutoCadastroComponent,
        ProdutoUpdateComponent
    ],
    exports: [
        ProdutoCadastroComponent,
        ProdutoUpdateComponent
    ],
    imports: [
        CommonModule,

        MatInputModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatCardModule,
        FlexLayoutModule
    ]
})
export class ProdutoCrudModule {

}
