import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import {EnergyValue} from '../models/energyvalue.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class EnergyValueService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private serverUrl = environment.serverUrl + '/energyvalues'; // URL to web api
  private energyValues: EnergyValue[] = [];
  energyValuesChanged = new Subject<EnergyValue[]>();


  //
  //
  //
  constructor(private http: Http) { }

  //
  //
  //
  public getEnergyValues(): Promise<EnergyValue[]> {
    console.log('get values from the server');
    return this.http.get(this.serverUrl, { headers: this.headers })
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as EnergyValue[];
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  //
  //
  //
  private handleError(error: any): Promise<any> {
    console.log('handleError');
    return Promise.reject(error.message || error);
  }

}
