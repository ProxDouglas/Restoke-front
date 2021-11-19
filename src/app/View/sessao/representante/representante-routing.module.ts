import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RepresentanteComponent} from "./representante.component";





const routeRepresentante: Routes = [

  { path: '', component: RepresentanteComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routeRepresentante)],
  exports: [RouterModule]
})

export class RepresentanteRoutingModule { }
