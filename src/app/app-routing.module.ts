import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginFornecedorComponent} from "./View/login/forncedor/login-fornecedor.component";
import {FornecedorCadastroFormComponent} from "./View/sessao/fornecedor/fornecedor-cadastro-form/fornecedor-cadastro-form.component";

import {AuthFornecedorGuard} from "./guards/auth/auth-fornecedor.guard";
import {TipoSessaoComponent} from "./View/login/tipo-sessao/tipo-sessao.component";
import {LoginRepresentanteComponent} from "./View/login/representante/login-representante.component";
import {AuthRepresentanteGuard} from "./guards/auth/auth-representante.guard";



const routes: Routes = [

  {
    path: '', //component: content
    loadChildren: () => import('./View/principal-page/content/content.module')
      .then(m => m.ContentModule),
    // useAsDefaout()
  },
  {
    path: 'fornecedor',
    loadChildren: () => import('./View/sessao/fornecedor/fornecedor.module')
      .then(m => m.FornecedorModule),
    canActivate: [AuthFornecedorGuard]
  },

  {
    path: 'representante',
    loadChildren: () => import('./View/sessao/representante/representante.module')
      .then(m => m.RepresentanteModule),
    canActivate: [AuthRepresentanteGuard]
  },

  { path: 'cadastro', component: FornecedorCadastroFormComponent },

  { path: 'acessarFonecedor', component: LoginFornecedorComponent },

  { path: 'acessarRepresentante', component: LoginRepresentanteComponent },

  {path: 'sessao', component: TipoSessaoComponent},

  {
    path: '**', pathMatch: 'full', redirectTo: ''
    //path: '**', component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
