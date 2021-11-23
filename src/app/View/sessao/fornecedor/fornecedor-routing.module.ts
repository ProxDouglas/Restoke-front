import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FornecedorComponent} from "./fornecedor.component";
import {UploadImageComponent} from "./forms/representante-crud/upload-image/upload-image.component";
import {RepresentanteCadastroFormComponent} from "./forms/representante-crud/representante-cadastro-form.component";
import {AuthFornecedorGuard} from "../../../guards/fornecedor/auth/auth-fornecedor.guard";
import {ProdutoCrudModule} from "./forms/produto-crud/produto-crud.module";


const routeFornecedor: Routes = [

  { path: '', component: FornecedorComponent },
  { path: 'representanteCadastro', component: RepresentanteCadastroFormComponent},
  { path: 'representante/:id', component: UploadImageComponent},
  {
    path: 'produtos',
    loadChildren: () => import('./forms/produto-crud/produto-crud.module')
      .then(m => m.ProdutoCrudModule),
    canActivate: [AuthFornecedorGuard]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routeFornecedor)],
  exports: [RouterModule]
})

export class FornecedorRoutingModule { }
