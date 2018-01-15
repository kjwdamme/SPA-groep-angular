import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LocationService} from '../../../services/location.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-converter-edit',
  templateUrl: './converter-edit.component.html',
  styleUrls: ['./converter-edit.component.css']
})
export class ConverterEditComponent implements OnInit {

  converterForm: FormGroup;
  id: string;

  constructor(private locationService: LocationService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];

          this.initForm();
        }

      )
  }

  onSubmit() {
    this.locationService.addConverterToLocation(this.id, this.converterForm.value);
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['/locations/' + this.id]);
  }

  initForm() {
    this.converterForm = new FormGroup({
      'serialNumber': new FormControl('', Validators.required),
      'deviceName': new FormControl('', Validators.required),
      'online': new FormControl('', Validators.required),
      'deviceModel': new FormControl('', Validators.required),
      'displaySoftwareVersion': new FormControl('', Validators.required),
      'masterControlSoftwareVersion': new FormControl('', Validators.required),
      'slaveControlVersion': new FormControl('', Validators.required)
    })
  }

}
