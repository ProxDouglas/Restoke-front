import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuGeralModule} from "./View/MenuGeral/menu-geral.module";
import {PageNotFoundComponent} from "./shered/page-not-found/page-not-found.component";
import {RepresentanteCadastroFormComponent} from "./View/fornecedor/Forms/representante-cadastro-form/representante-cadastro-form.component";

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'menu'
  },
  {
    path: 'menu', //component: MenuGeralComponent
    loadChildren: () => import('./View/MenuGeral/menu-geral.module')
      .then(m => m.MenuGeralModule)
  },
  {
    path: 'fornecedor', //component: MenuGeralComponent
    loadChildren: () => import('./View/fornecedor/fornecedor.module')
      .then(m => m.FornecedorModule)
  },

  {
    path: '**', pathMatch: 'full', redirectTo: 'menu'
    //path: '**', component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
