import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {LocationService} from '../../../services/location.service';

@Component({
  selector: 'app-energy-value-edit',
  templateUrl: './energy-value-edit.component.html',
  styleUrls: ['./energy-value-edit.component.css']
})
export class EnergyValueEditComponent implements OnInit {

  energyValueForm: FormGroup;
  id: string;
  converterId: string;

  constructor(private locationService: LocationService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.converterId = params['converterId'];
          this.initForm();
        }

      )
  }

  onSubmit() {
    console.log('location id: ' + this.id);
    console.log('converter id: ' + this.converterId);
    console.dir(this.energyValueForm.value);
    this.locationService.addEnergyValueToConverter(this.id, this.converterId, this.energyValueForm.value);
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['/locations/' + this.id]);
  }

  initForm() {
    this.energyValueForm = new FormGroup({
      'timestamp': new FormControl('', Validators.required),
      'info': new FormGroup({
        'energyvalue': new FormControl('', Validators.required),
        'alert_info': new FormControl('', Validators.required)
      })

    });
  }
}
