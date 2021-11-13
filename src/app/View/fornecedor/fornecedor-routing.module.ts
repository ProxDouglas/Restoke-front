import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FornecedorComponent} from "./fornecedor.component";
import {UploadImageComponent} from "./forms/representante-crud/upload-image/upload-image.component";
import {RepresentanteCadastroFormComponent} from "./forms/representante-crud/representante-cadastro-form.component";
import {ProdutoCadastroComponent} from "./forms/produto-crud/produto-cadastro/produto-cadastro.component";
import {ProdutoUpdateComponent} from "./forms/produto-crud/produto-update/produto-update.component";

const routeFornecedor: Routes = [
  { path: '', component: FornecedorComponent },

  { path: 'representanteCadastro', component: RepresentanteCadastroFormComponent},
  { path: 'representante/:id', component: UploadImageComponent},
  { path: 'cadastroProduto', component: ProdutoCadastroComponent},
  { path: 'atualizarproduto', component: ProdutoUpdateComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routeFornecedor)],
  exports: [RouterModule]
})

export class FornecedorRoutingModule { }
