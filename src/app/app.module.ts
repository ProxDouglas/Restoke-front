import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PrincipalPageModule} from "./View/principal-page/principal-page.module";
import {MenuGeralModule} from "./View/MenuGeral/menu-geral.module";
import {FFDModule} from "./View/ffd/ffd.module";
import {ProdutoCadastroFormModule} from "./View/forms/produto-cadastro-form/produto-cadastro-form.module";
import {HttpClientModule} from "@angular/common/http";
import {FornecedorCadastroFormModule} from "./View/forms/fornecedor-cadastro-form/fornecedor-cadastro-form.module";
import {CadastroFornecedor} from "./Service/cadastro-fornecedor.service";


@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MenuGeralModule,
    FFDModule,
    ProdutoCadastroFormModule,
    FornecedorCadastroFormModule,

  ],
  providers: [CadastroFornecedor],
  bootstrap: [AppComponent]
})
export class AppModule { }
