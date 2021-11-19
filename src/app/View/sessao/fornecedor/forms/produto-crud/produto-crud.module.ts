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
import { ListProdutosComponent } from './list-produtos/list-produtos.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ProdutoCrudRoutingModule} from "./produto-crud-routing.module";



@NgModule({
    declarations: [
        ProdutoCadastroComponent,
        ProdutoUpdateComponent,
        ListProdutosComponent,
    ],
    exports: [
        ProdutoCadastroComponent,
        ProdutoUpdateComponent,
        ListProdutosComponent
    ],
    imports: [
        CommonModule,
        ProdutoCrudRoutingModule,

        MatInputModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatCardModule,
        FlexLayoutModule,
        MatProgressSpinnerModule
    ]
})
export class ProdutoCrudModule {

}
