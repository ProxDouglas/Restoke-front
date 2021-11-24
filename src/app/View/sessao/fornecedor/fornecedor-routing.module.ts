import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FornecedorComponent} from "./fornecedor.component";
import {RepresentanteCadastroComponent} from "./forms/representante-crud/representante-cadastro.component";
import {AuthFornecedorGuard} from "../../../guards/fornecedor/auth/auth-fornecedor.guard";


const routeFornecedor: Routes = [

  { path: '', component: FornecedorComponent },
  { path: 'cadastroRep', component: RepresentanteCadastroComponent},
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
