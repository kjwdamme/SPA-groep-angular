import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {LocationService} from '../../../services/location.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Location } from '../../../models/location.model';

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
    if (this.editMode) {
      console.log('edit');
      this.locationService.updateLocation(this.id, this.locationForm.value);
      this.router.navigate(['/locations/' + this.id]);
    } else {
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

  }

  private initForm() {

    let editLocation = new Location({
      name: '',
      street: '',
      houseNumber: '',
      city: '',
      zipCode: '',
      country: '',
      owner: '',
      installationDate: '',
      installer: '',
      contactPerson: '',
    });

    if(this.editMode) {
      this.locationService.getLocation(this.id)
        .then( location => {
          editLocation = location;

          this.locationForm = new FormGroup({
            'name': new FormControl(location.name, Validators.required),
            'street': new FormControl(location.street, Validators.required),
            'houseNumber': new FormControl(location.houseNumber, Validators.required),
            'city': new FormControl(location.city, Validators.required),
            'zipCode': new FormControl(location.zipCode, Validators.required),
            'country': new FormControl(location.country, Validators.required),
            'owner': new FormControl(location.owner, Validators.required),
            'installationDate': new FormControl(location.installationDate, Validators.required),
            'installer': new FormControl(location.installer, Validators.required),
            'contactPerson': new FormControl(location.contactPerson, Validators.required),
          });
        })
    }

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
