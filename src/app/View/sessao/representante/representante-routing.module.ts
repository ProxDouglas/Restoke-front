import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RepresentanteComponent} from "./representante.component";
import {CatalogoEditComponent} from "./editar/catalogo-edit.component";





const routeRepresentante: Routes = [

  { path: '', component: RepresentanteComponent},

  { path: 'edit', component: CatalogoEditComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routeRepresentante)],
  exports: [RouterModule]
})

export class RepresentanteRoutingModule { }
