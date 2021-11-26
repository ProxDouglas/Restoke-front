import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FornecedorComponent} from "./fornecedor.component";

import {AuthFornecedorGuard} from "../../../guards/fornecedor/auth/auth-fornecedor.guard";


const routeFornecedor: Routes = [

  { path: '', component: FornecedorComponent },
  {
    path: 'representante',
    loadChildren: () => import('./manipulacao/representante/representante.module')
      .then(m => m.RepresentanteModule),
    canActivate: [AuthFornecedorGuard]
  },
  {
    path: 'produtos',
    loadChildren: () => import('./manipulacao/produto-crud/produto-crud.module')
      .then(m => m.ProdutoCrudModule),
    canActivate: [AuthFornecedorGuard]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routeFornecedor)],
  exports: [RouterModule]
})

export class FornecedorRoutingModule { }
