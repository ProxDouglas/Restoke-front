import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuGeralComponent} from "./View/MenuGeral/menu-geral.component";

const routes: Routes = [{
  path: '',
  component: MenuGeralComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
