import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LocationService} from '../../../../services/location.service';
import { Location } from '../../../../models/location.model';

@Component({
  selector: 'app-location-item',
  templateUrl: './location-item.component.html',
  styleUrls: ['./location-item.component.css']
})
export class LocationItemComponent implements OnInit {

  @Input() location: Location;
  @Input() id: string;
  @Output() locationSelected = new EventEmitter<void>();

  constructor(private route: ActivatedRoute,
              private locationService: LocationService,
              private router: Router) { }

  ngOnInit() {
    this.id = this.location.id;
    console.log(this.location);
  }

  onSelected() {
    this.locationSelected.emit();
  }

  // onDeleteFromFavorites() {
  //   this.adService.removeFromFavorites(this.id);
  //   this.router.navigate(['/advertisements']);
  // }

}
