import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomestayRoutingModule } from './homestay-routing.module';
import { HomestayComponent } from './homestay.component';


@NgModule({
  declarations: [
    HomestayComponent
  ],
  imports: [
    CommonModule,
    HomestayRoutingModule
  ]
})
export class HomestayModule { }
