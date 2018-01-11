import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {LocationService} from '../../../services/location.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-location-edit',
  templateUrl: './location-edit.component.html',
  styleUrls: ['./location-edit.component.css']
})
export class LocationEditComponent implements OnInit {

  id: string;
  editMode = false;
  locationForm: FormGroup;
  validations: string;

  constructor(private route: ActivatedRoute, private router: Router, private locationService: LocationService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    this.locationService.addLocation(this.locationForm.value);
    this.locationService.getLocations()
      .then( locations => {
        this.locationService.locationsChanged.next(locations.slice());
        this.onCancel();
      })
      .catch( error => {
        error = this.validations;
        console.log(error);
      });
  }

  private initForm() {
    this.locationForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'street': new FormControl('', Validators.required),
      'houseNumber': new FormControl('', Validators.required),
      'city': new FormControl('', Validators.required),
      'zipCode': new FormControl('', Validators.required),
      'country': new FormControl('', Validators.required),
      'owner': new FormControl('', Validators.required),
      'installationDate': new FormControl('', Validators.required),
      'installer': new FormControl('', Validators.required),
      'contactPerson': new FormControl('', Validators.required),
    });
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
