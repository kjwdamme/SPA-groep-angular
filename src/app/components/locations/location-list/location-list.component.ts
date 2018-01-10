import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';
import { LocationService } from '../../../services/location.service';
import { Location } from '../../../models/location.model';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit, OnDestroy {
  @Output() locationWasSelected = new EventEmitter<Location>();
  locations: Location[];
  subscription: Subscription;

  constructor(private locationService: LocationService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.locationService.locationsChanged
      .subscribe(
        (locations: Location[]) => {
          this.locations = locations;
        }
      );

    this.locationService.getLocations()
      .then( locations => this.locations = locations)
      .catch(error => console.log(error));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  //
  onLocationSelected(location: Location) {
    this.locationWasSelected.emit(location);
    // console.dir(location);
    // console.log('werkt');
  }
  //
  // onNewAdvertisement() {
  //   this.router.navigateByUrl('/new');
  // }
}
