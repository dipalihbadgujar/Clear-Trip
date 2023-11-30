import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightssRoutingModule } from './flightss-routing.module';
import { FlightssComponent } from './flightss.component';


@NgModule({
  declarations: [
    FlightssComponent
  ],
  imports: [
    CommonModule,
    FlightssRoutingModule
  ]
})
export class FlightssModule { }
