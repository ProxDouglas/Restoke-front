import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopMenuComponent } from './top-menu.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {PesquisaModule} from "../content/pesquisa/pesquisa.module";
import { NavBarModule } from './nav-bar/nav-bar.module';
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";

import {MatIconModule} from "@angular/material/icon";
import {ProdutoCrudModule} from "../../sessao/fornecedor/forms/produto-crud/produto-crud.module";
import {TopMenuRoutingModule} from "./top-menu-routing.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatMenuModule} from "@angular/material/menu";


@NgModule({
  declarations: [
    TopMenuComponent,
  ],
  exports: [
    TopMenuComponent,

  ],
    imports: [
        CommonModule,
        PesquisaModule,

        TopMenuRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatProgressBarModule,
        FlexLayoutModule,
        MatIconModule,
        FlexLayoutModule,
        MatMenuModule,

    ]
})
export class TopMenuModule {

}

