import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MenuGeralComponent} from "./menu-geral.component";

const routes: Routes = [
  { path: '', component: MenuGeralComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class MenuGeralRoutingModule { }
