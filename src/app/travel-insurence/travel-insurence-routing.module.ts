import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelInsurenceComponent } from './travel-insurence.component';

const routes: Routes = [{ path: '', component: TravelInsurenceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelInsurenceRoutingModule { }
