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
  @Output() locationWasSelected = new EventEmitter<Location>();
  advertisement: Location = new Location();
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
            .then( ad => {
              console.dir(ad);
              this.advertisement = ad;
              console.log('response: ' + ad);
            })
            .catch( error => console.log(error));
        }
      );
  }

  onAdvertisementSelected(location: Location) {
    this.router.navigate(['locations/' + location._id]);
  }
}
