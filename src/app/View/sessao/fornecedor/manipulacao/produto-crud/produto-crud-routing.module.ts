import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProdutoCadastroComponent} from "./produto-cadastro/produto-cadastro.component";
import {ListProdutosComponent} from "./list-produtos/list-produtos.component";
import {ProdutoResolverGuard} from "../../../../../guards/produto/produto-resolver-guard.service";

const routeProdutoCRUD: Routes = [

  { path: '', component: ListProdutosComponent},
  { path: 'cadastro', component: ProdutoCadastroComponent,
  resolve:{
    produto:ProdutoResolverGuard
  }},
  { path: 'editar/:idProd', component: ProdutoCadastroComponent,
    resolve:{
      produto:ProdutoResolverGuard
    }},


];

@NgModule({
  imports: [RouterModule.forChild(routeProdutoCRUD)],
  exports: [RouterModule]
})

export class ProdutoCrudRoutingModule { }
