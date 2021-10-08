import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FornecedorComponent} from "./fornecedor.component";
import {UploadImageComponent} from "./Forms/representante-cadastro-form/upload-image/upload-image.component";
import {RepresentanteCadastroFormComponent} from "./Forms/representante-cadastro-form/representante-cadastro-form.component";

const routeFornecedor: Routes = [
  { path: '', component: FornecedorComponent },

  { path: 'RepresentanteCadastro', component: RepresentanteCadastroFormComponent},
  { path: 'RepresentanteCadastro/:id', component: UploadImageComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routeFornecedor)],
  exports: [RouterModule]
})

export class FornecedorRoutingModule { }
