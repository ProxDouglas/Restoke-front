import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NavBarComponent} from "./nav-bar.component";
import {MatTabsModule} from '@angular/material/tabs';
import {ContentModule} from "../../content/content.module";



@NgModule({
  declarations: [
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    ContentModule,

    MatTabsModule,



  ],
  exports: [
    NavBarComponent,

  ],
})
export class NavBarModule {

}
