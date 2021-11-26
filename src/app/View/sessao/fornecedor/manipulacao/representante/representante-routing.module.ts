import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {AssociacaoComponent} from "./associacao/associacao.component";
import {RepresentanteCadastroComponent} from "./cadastro/representante-cadastro.component";
import {FornecedorComponent} from "../../fornecedor.component";


const routeFornecedor: Routes = [
  // { path: '', component: FornecedorComponent},
  { path: 'cadastro', component: RepresentanteCadastroComponent},
  { path: 'associar', component: AssociacaoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routeFornecedor)],
  exports: [RouterModule]
})

export class RepresentanteRoutingModule { }
