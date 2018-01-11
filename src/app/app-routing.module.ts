import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LocationDetailComponent} from './components/locations/location-detail/location-detail.component';
import {LocationsComponent} from './components/locations/locations.component';
import {LocationEditComponent} from './components/locations/location-edit/location-edit.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/locations', pathMatch: 'full'},
  {path: 'locations', component: LocationsComponent},
  {path: 'locations/new', component: LocationEditComponent},
  {path: 'locations/:id', component: LocationDetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
