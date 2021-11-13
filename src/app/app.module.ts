import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TopMenuModule} from "./View/principal-page/top-menu/top-menu.module";
import {FornecedorCadastroFormModule} from "./View/login/fornecedor-cadastro-form/fornecedor-cadastro-form.module";
import { PageNotFoundComponent } from './shered/page-not-found/page-not-found.component';
import {FornecedorModule} from "./View/fornecedor/fornecedor.module";
import {FornecedorRoutingModule} from "./View/fornecedor/fornecedor-routing.module";
import {AuthService} from "./Service/auth.service";
import {AuthGuard} from "./guards/auth.guard";
import {LoginModule} from "./View/login/login.module";
import {ContentModule} from "./View/principal-page/content/content.module";


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
        TopMenuModule,
        FornecedorModule,
        FormsModule,
        FornecedorCadastroFormModule,
        FornecedorRoutingModule,
        LoginModule,
        ContentModule


    ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
