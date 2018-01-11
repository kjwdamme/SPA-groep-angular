import { Component, OnInit } from '@angular/core';
import { Location } from '../../models/location.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  selectedLocation: Location;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onNewLocation() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
