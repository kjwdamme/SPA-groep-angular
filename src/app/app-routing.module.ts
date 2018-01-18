import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LocationDetailComponent} from './components/locations/location-detail/location-detail.component';
import {LocationsComponent} from './components/locations/locations.component';
import {LocationEditComponent} from './components/locations/location-edit/location-edit.component';
import {ConverterEditComponent} from './components/locations/converter-edit/converter-edit.component';
import {EnergyValueEditComponent} from './components/locations/energy-value-edit/energy-value-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';



const appRoutes: Routes = [
  {path: '', redirectTo: '/locations', pathMatch: 'full'},
  {path: 'signup', component: SignupComponent },
  {path: 'signin', component: SigninComponent },
  {path: 'locations', component: LocationsComponent},
  {path: 'locations/new', component: LocationEditComponent, canActivate: [AuthGuard]},
  {path: 'locations/:id', component: LocationDetailComponent},
  {path: 'locations/:id/edit', component: LocationEditComponent, canActivate: [AuthGuard]},
  {path: 'locations/:id/converter', component: ConverterEditComponent, canActivate: [AuthGuard]},
  {path: 'locations/:id/:converterId', component: EnergyValueEditComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
