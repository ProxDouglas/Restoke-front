import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopMenuComponent} from "./top-menu.component";

const routes: Routes = [
  { path: '', component: TopMenuComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class TopMenuRoutingModule { }
