import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginFornecedorComponent} from "./View/login/forncedor/login-fornecedor.component";
import {FornecedorCadastroFormComponent} from "./View/sessao/fornecedor/fornecedor-cadastro-form/fornecedor-cadastro-form.component";

import {AuthFornecedorGuard} from "./guards/fornecedor/auth/auth-fornecedor.guard";
import {TipoSessaoComponent} from "./View/login/tipo-sessao/tipo-sessao.component";
import {LoginRepresentanteComponent} from "./View/login/representante/login-representante.component";
import {AuthRepresentanteGuard} from "./guards/representante/auth/auth-representante.guard";
import {AuthUserGuard} from "./guards/auth-user.guard";
import {ContentComponent} from "./View/principal-page/content/content.component";
import {RepresentanteResolverGuard} from "./guards/representante/resolver/representante-resolver.guard";
import {RepresentanteCadastroComponent} from "./View/sessao/fornecedor/manipulacao/representante/cadastro/representante-cadastro.component";
import {TipoCadastroComponent} from "./View/cadastro/tipo-cadastro/tipo-cadastro.component";



const routes: Routes = [

  {path: '', component: ContentComponent},

  {
    path: 'listCatalogo/:id',
    loadChildren: () => import('./View/principal-page/content/catalogo/catalogo-content.module')
      .then(m => m.CatalogoContentModule),
    resolve:{
      representante:RepresentanteResolverGuard,
    }
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

  { path: 'cadastroForn', component: FornecedorCadastroFormComponent,
    canActivate: [AuthUserGuard]},

  { path: 'cadastroRep', component: RepresentanteCadastroComponent,
    canActivate: [AuthUserGuard]},

  { path: 'acessarFonecedor', component: LoginFornecedorComponent,
    canActivate: [AuthUserGuard]},

  { path: 'acessarRepresentante', component: LoginRepresentanteComponent,
    canActivate: [AuthUserGuard]},

  {path: 'sessao', component: TipoSessaoComponent,
    canActivate: [AuthUserGuard]},

  {path: 'cadastro', component: TipoCadastroComponent,
    canActivate: [AuthUserGuard]},

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
