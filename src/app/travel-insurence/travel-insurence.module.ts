import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelInsurenceRoutingModule } from './travel-insurence-routing.module';
import { TravelInsurenceComponent } from './travel-insurence.component';


@NgModule({
  declarations: [
    TravelInsurenceComponent
  ],
  imports: [
    CommonModule,
    TravelInsurenceRoutingModule
  ]
})
export class TravelInsurenceModule { }
