import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NavBarComponent} from "./nav-bar.component";
import {MatTabsModule} from '@angular/material/tabs';
import {PrincipalPageModule} from "../../principal-page/principal-page.module";



@NgModule({
  declarations: [
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    PrincipalPageModule,

    MatTabsModule,



  ],
  exports: [
    NavBarComponent,

  ],
})
export class NavBarModule {

}
