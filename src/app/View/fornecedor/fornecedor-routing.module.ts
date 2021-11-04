import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FornecedorComponent} from "./fornecedor.component";
import {UploadImageComponent} from "./forms/representante-cadastro-form/upload-image/upload-image.component";
import {RepresentanteCadastroFormComponent} from "./forms/representante-cadastro-form/representante-cadastro-form.component";
import {ProdutoCadastroFormComponent} from "./forms/produto-cadastro-form/produto-cadastro-form.component";

const routeFornecedor: Routes = [
  { path: '', component: FornecedorComponent },

  { path: 'RepresentanteCadastro', component: RepresentanteCadastroFormComponent},
  { path: 'representante/:id', component: UploadImageComponent},
  { path: 'CadastroProduto', component: ProdutoCadastroFormComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routeFornecedor)],
  exports: [RouterModule]
})

export class FornecedorRoutingModule { }
