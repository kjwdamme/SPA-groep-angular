import { Component, OnInit } from '@angular/core';
import { Location } from '../../models/location.model';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  selectedLocation: Location;

  constructor() { }

  ngOnInit() {
  }

}
