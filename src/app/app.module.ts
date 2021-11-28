import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TopMenuModule} from "./View/principal-page/top-menu/top-menu.module";
import {FornecedorCadastroFormModule} from "./View/sessao/fornecedor/fornecedor-cadastro-form/fornecedor-cadastro-form.module";
import { PageNotFoundComponent } from './shered/page-not-found/page-not-found.component';
import {FornecedorModule} from "./View/sessao/fornecedor/fornecedor.module";
import {FornecedorRoutingModule} from "./View/sessao/fornecedor/fornecedor-routing.module";
import {AuthFornecedorService} from "./Service/auth/fornecedor/auth-fornecedor.service";
import {AuthFornecedorGuard} from "./guards/fornecedor/auth/auth-fornecedor.guard";
import {LoginFornecedorModule} from "./View/login/forncedor/login-fornecedor.module";
import {ContentModule} from "./View/principal-page/content/content.module";
import { TipoSessaoComponent } from './View/login/tipo-sessao/tipo-sessao.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {FlexLayoutModule} from "@angular/flex-layout";
import {LoginRepresentanteModule} from "./View/login/representante/login-representante.module";
import {AuthRepresentanteService} from "./Service/auth/representante/auth-representante.service";
import {AuthRepresentanteGuard} from "./guards/representante/auth/auth-representante.guard";
import {AuthUserGuard} from "./guards/auth-user.guard";
import {CatalogoContentModule} from "./View/principal-page/content/catalogo/catalogo-content.module";
import {TipoCadastroComponent} from "./View/cadastro/tipo-cadastro/tipo-cadastro.component";


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    TipoSessaoComponent,
    TipoCadastroComponent

  ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        TopMenuModule,
        FornecedorModule,
        FormsModule,
        FornecedorCadastroFormModule,
        ContentModule,
        LoginFornecedorModule,
        LoginRepresentanteModule,


        MatGridListModule,
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatProgressBarModule,
        FlexLayoutModule


    ],
  providers: [AuthFornecedorService, AuthFornecedorGuard,
              AuthRepresentanteService, AuthRepresentanteGuard,
              AuthUserGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
