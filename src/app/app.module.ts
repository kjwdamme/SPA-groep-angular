import {LocationService} from './services/location.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule, Http } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import {LocationItemComponent} from './components/locations/location-list/location-item/location-item.component';
import {LocationsComponent} from './components/locations/locations.component';
import {LocationListComponent} from './components/locations/location-list/location-list.component';
import {LocationDetailComponent} from './components/locations/location-detail/location-detail.component';
import { LocationEditComponent } from './components/locations/location-edit/location-edit.component';
import { AgmCoreModule } from '@agm/core';
import { ConverterEditComponent } from './components/locations/converter-edit/converter-edit.component';
import { EnergyValueEditComponent } from './components/locations/energy-value-edit/energy-value-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LocationItemComponent,
    LocationDetailComponent,
    LocationListComponent,
    LocationsComponent,
    LocationEditComponent,
    ConverterEditComponent,
    EnergyValueEditComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCHZhZ--Z-yo4tMbWKnzFWHfJ7N3KPEU8g'
    })
  ],
  providers: [
    LocationService, AuthService, AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
