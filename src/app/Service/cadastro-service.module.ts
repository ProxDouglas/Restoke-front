import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CadastroFornecedor} from "./cadastro-fornecedor.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [CadastroFornecedor],
})
export class CadastroServiceModule { }
