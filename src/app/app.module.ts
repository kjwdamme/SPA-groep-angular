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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LocationItemComponent,
    LocationDetailComponent,
    LocationListComponent,
    LocationsComponent,
    LocationEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    LocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
