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

  constructor(private router: Router, private locationService: LocationService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.location._id;
    // console.log(this.location);
    // console.log(this.id);
  }

  onSelected() {
    this.locationSelected.emit();
  }
}
