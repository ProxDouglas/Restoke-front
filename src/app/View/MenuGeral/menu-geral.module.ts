import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuGeralComponent } from './menu-geral.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {PesquisaModule} from "./pesquisa/pesquisa.module";
import { NavBarModule } from './nav-bar/nav-bar.module';
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from "@angular/material/icon";
import {ProdutoCadastroFormModule} from "../fornecedor/Forms/produto-cadastro-form/produto-cadastro-form.module";
import {MenuGeralRoutingModule} from "./menu-geral-routing.module";





@NgModule({
  declarations: [
    MenuGeralComponent
  ],
  exports: [
    MenuGeralComponent,

  ],
    imports: [
        CommonModule,
        PesquisaModule,
        NavBarModule,


        MenuGeralRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatProgressBarModule,
        FlexLayoutModule,
        MatIconModule,
        ProdutoCadastroFormModule,

    ]
})
export class MenuGeralModule {

}

