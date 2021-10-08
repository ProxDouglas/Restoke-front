import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PrincipalPageModule} from "./View/principal-page/principal-page.module";
import {MenuGeralModule} from "./View/MenuGeral/menu-geral.module";
import {FFDModule} from "./View/ffd/ffd.module";
import {ProdutoCadastroFormModule} from "./View/fornecedor/Forms/produto-cadastro-form/produto-cadastro-form.module";
import {HttpClientModule} from "@angular/common/http";
import {FornecedorCadastroFormModule} from "./View/forms/fornecedor-cadastro-form/fornecedor-cadastro-form.module";
import {RepresentanteCadastroFormModule} from "./View/fornecedor/Forms/representante-cadastro-form/representante-cadastro-form.module";
import { PageNotFoundComponent } from './shered/page-not-found/page-not-found.component';
import {FornecedorModule} from "./View/fornecedor/fornecedor.module";
import {FornecedorRoutingModule} from "./View/fornecedor/fornecedor-routing.module";
import {AuthService} from "./View/login/auth.service";






@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,




  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenuGeralModule,
    FornecedorModule,
    FormsModule,
    FFDModule,
    ProdutoCadastroFormModule,
    FornecedorCadastroFormModule,
    FornecedorRoutingModule,




  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
