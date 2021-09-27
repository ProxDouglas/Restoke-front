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
import {CadastroServiceModule} from "./Service/cadastro-service.module";
import {RepresentanteCadastroFormModule} from "./View/forms/representante-cadastro-form/representante-cadastro-form.module";
import { PageNotFoundComponent } from './shered/page-not-found/page-not-found.component';
import {FornecedorModule} from "./View/fornecedor/fornecedor.module";
import { UploadImageComponent } from './View/forms/upload-image/upload-image.component';




@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    UploadImageComponent,



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
        CadastroServiceModule,
        RepresentanteCadastroFormModule,


    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
