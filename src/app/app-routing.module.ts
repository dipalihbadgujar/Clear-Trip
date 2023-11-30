import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'hotels', loadChildren: () => import('./hotels/hotels.module').then(m => m.HotelsModule) },
 { path: 'flights', loadChildren: () => import('./flightss/flightss.module').then(m => m.FlightssModule) },
{path:'',redirectTo:'/hotels',pathMatch:'full'},
 { path: 'trains', loadChildren: () => import('./trains/trains.module').then(m => m.TrainsModule) },
 { path: 'buses', loadChildren: () => import('./buses/buses.module').then(m => m.BusesModule) },
 { path: 'homestay', loadChildren: () => import('./homestay/homestay.module').then(m => m.HomestayModule) },
 { path: 'cabs', loadChildren: () => import('./cabs/cabs.module').then(m => m.CabsModule) },
 { path: 'holiday-package', loadChildren: () => import('./holiday-package/holiday-package.module').then(m => m.HolidayPackageModule) },
 { path: 'travel-insurence', loadChildren: () => import('./travel-insurence/travel-insurence.module').then(m => m.TravelInsurenceModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
