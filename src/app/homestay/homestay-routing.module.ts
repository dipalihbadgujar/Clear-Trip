import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomestayComponent } from './homestay.component';

const routes: Routes = [{ path: '', component: HomestayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomestayRoutingModule { }
