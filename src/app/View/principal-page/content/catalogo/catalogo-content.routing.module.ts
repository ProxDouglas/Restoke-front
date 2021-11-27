import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCatalogoComponent} from "./list-catalogo/list-catalogo.component";
import {CatalogoRepresentanteComponent} from "./catalogo-representante/catalogo-representante.component";
import {DetailComponent} from "./catalogo-representante/detail/detail/detail.component";

import {RepresentanteResolverGuard} from "../../../../guards/representante/resolver/representante-resolver.guard";
import {ProdutoResolverGuard} from "../../../../guards/produto/produto-resolver-guard.service";
import {CatalogoResolverGuardService} from "../../../../guards/catalogo/catalogo-resolver-guard.service";


const routeCatalogo: Routes = [
  { path: '', component: ListCatalogoComponent },

  { path: 'catalogo/:idCat', component:  CatalogoRepresentanteComponent,
  resolve:{
    catalogo: CatalogoResolverGuardService, representante: RepresentanteResolverGuard
  }},

  { path: 'catalogo/:idCat/produto/:idProd', component: DetailComponent,
  resolve:{
    produto: ProdutoResolverGuard
  }},

];

@NgModule({
  imports: [RouterModule.forChild(routeCatalogo)],
  exports: [RouterModule]
})


export class CatalogoContentRoutingModule { }
