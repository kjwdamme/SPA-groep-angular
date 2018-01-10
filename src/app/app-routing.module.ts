import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LocationDetailComponent} from './components/locations/location-detail/location-detail.component';
import {LocationsComponent} from './components/locations/locations.component';

const appRoutes: Routes = [
  { path: 'locations', component: LocationsComponent },
  { path: '**', redirectTo: '/locations' },
  { path: 'locations/:id', component: LocationDetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
