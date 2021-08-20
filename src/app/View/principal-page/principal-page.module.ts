import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalPageComponent } from './principal-page.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    PrincipalPageComponent
  ],
  exports: [
    PrincipalPageComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ]
})
export class PrincipalPageModule { }
