import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';
import {Subject} from 'rxjs/Subject';
import {Location} from '../models/location.model';
import 'rxjs/add/operator/map';
import {Converter} from '../models/converter.model';
import {EnergyValue} from '../models/energyvalue.model';

@Injectable()
export class LocationService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private serverUrl = environment.serverUrl + '/locations'; // URL to web api
  private locations: Location[] = [];
  locationsChanged = new Subject<Location[]>();


  //
  //
  //
  constructor(private http: Http) {
    this.readLocations();
   }

  //
  //
  //

  public readLocations() {
    this.http.get(environment.serverUrl + '/locations')
    .map((response) => {
      console.log("map");
      const locations = response.json() as Location[];
      return locations;
    })
    .subscribe((locations) => {
      console.log("subscribe");
      this.locations = locations as Location[];
      this.locationsChanged.next(this.locations.slice());
    })
  }


  // public getLocations(){
  //   return this.locations.slice();
  // }


  getConverters(index: number){
    return this.locations[index].converters.slice();
  }


  public getLocations(): Promise<Location[]> {
    console.log('get values from the server');
    return this.http.get(this.serverUrl, { headers: this.headers })
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as Location[];
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  public getLocation(id: string): Promise<Location> {
    console.log('get ad with id: ' + id);
    return this.http.get(this.serverUrl + '/' + id, { headers: this.headers })
      .toPromise()
      .then( response => {
        console.log('Added advertisement: ' + response.json());
        return response.json() as Location;
      })
      .catch(( error => {
        return this.handleError(error);
      }));
  }

  public deleteLocation(id: string) {
    this.http.delete(this.serverUrl + '/' + id, { headers: this.headers})
      .toPromise()
      .then( response => {
        this.locationsChanged.next(this.locations.slice());
      })
      .catch(( error => {
        return this.handleError(error);
      }));
  }

  public removeConverterFromLocation(locationId: string, converterId: string) {
    this.http.delete(this.serverUrl + '/' + locationId + '/' + converterId, {headers: this.headers})
      .toPromise()
      .then( response => {
        console.log(response);
        this.locationsChanged.next(this.locations.slice());
      })
      .catch((error => {
        return this.handleError(error);
      }));
  }

  public addLocation(location: Location) {
    this.http.post(this.serverUrl, location)
      .map(response => response.json() as Location)
      .subscribe( result => {
        this.locations.push(result as Location);
        this.locationsChanged.next(this.locations.slice());
      });
  }

  public updateLocation(id: string, newLocation: Location) {
    return this.http.put(this.serverUrl + '/' + id, newLocation, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.locationsChanged.next(this.locations.slice());
      })
      .catch((error => {
        return this.handleError(error);
      }))
  }


  public addConverterToLocation(id: string, converter: Converter) {
    this.http.put(this.serverUrl + '/' + id + '/converter', converter, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.locationsChanged.next(this.locations.slice());
      })
      .catch((error => {
        return this.handleError(error);
      }))
  }

  public addEnergyValueToConverter(locationId: string, converterId: string, energyValue: EnergyValue) {
    this.http.put(this.serverUrl + '/' + locationId + '/' + converterId + '/energyvalue', energyValue, {headers: this.headers})
      .toPromise()
      .then(response => {
        this.locationsChanged.next(this.locations.slice());
      })
      .catch((error => {
        return this.handleError(error);
      }));
  }
  
  public deleteEnergyValue(locationId: string, converterId: string, energyValueId: string) {
    this.http.delete(this.serverUrl + '/' + locationId + '/' + converterId + '/' + energyValueId, { headers: this.headers})
      .toPromise()
      .then( response => {
        this.locationsChanged.next(this.locations.slice());
      })
      .catch(( error => {
        return this.handleError(error);
      }));
  }

  //
  //
  //
  private handleError(error: any): Promise<any> {
    console.log('handleError');
    return Promise.reject(error.message || error);
  }

}
