import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from "./View/login/login.component";
import {FornecedorCadastroFormComponent} from "./View/login/fornecedor-cadastro-form/fornecedor-cadastro-form.component";

import {AuthGuard} from "./guards/auth.guard";


const routes: Routes = [

  {
    path: '', //component: content
    loadChildren: () => import('./View/principal-page/content/content.module')
      .then(m => m.ContentModule),
    // useAsDefaout()
  },
  {
    path: 'fornecedor',
    loadChildren: () => import('./View/fornecedor/fornecedor.module')
      .then(m => m.FornecedorModule),
    canActivate: [AuthGuard]
  },

  { path: 'cadastro', component: FornecedorCadastroFormComponent },

  { path: 'acessar', component: LoginComponent },

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
