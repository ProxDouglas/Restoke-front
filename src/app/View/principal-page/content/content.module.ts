import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentComponent } from './content.component';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from "@angular/flex-layout";
import {ContentRoutingModule} from "./content.routing.module";

@NgModule({
  declarations: [
    ContentComponent
  ],
  exports: [
    ContentComponent
  ],
  imports: [
    ContentRoutingModule,

    CommonModule,
    MatCardModule,
    FlexLayoutModule,
  ]
})
export class ContentModule { }
