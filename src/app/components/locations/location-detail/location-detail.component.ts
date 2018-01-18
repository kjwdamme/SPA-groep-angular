import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Location} from '../../../models/location.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { LocationService } from '../../../services/location.service';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})

export class LocationDetailComponent implements OnInit {
  location: Location = new Location();
  id: string;

  constructor(private locationService: LocationService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];

          this.locationService.getLocation(this.id)
            .then( loc => {
              console.dir(loc);
              this.location = loc;
              console.log(this.location);
            })
            .catch( error => console.log(error));
        }
      );
  }

  onDeleteLocation() {
    this.locationService.deleteLocation(this.id);
    this.router.navigate(['/locations']);
  }

  onEditLocation() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onAddConverter() {
    this.router.navigate(['converter'], {relativeTo: this.route});
  }

  onAddEnergyValue(convId: string) {
    console.log('converter id: ' + convId);
    this.router.navigate([convId], {relativeTo: this.route});
  }
}
