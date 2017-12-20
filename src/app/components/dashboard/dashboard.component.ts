import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {EnergyValueService} from '../../services/energyvalue.service';
import {EnergyValue} from '../../models/energyvalue.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, OnDestroy {


  @Output() energyValueSelected = new EventEmitter<EnergyValue>();
  energyValues: EnergyValue[];
  subscription: Subscription;

  constructor(private energyValueService: EnergyValueService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.energyValueService.energyValuesChanged
      .subscribe(
        (energyValues: EnergyValue[]) => {
          this.energyValues = energyValues;
        }
      );

    this.energyValueService.getEnergyValues()
      .then( values => this.energyValues = values)
      .catch(error => console.log(error));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAdvertisementSelected(advertisement: EnergyValue) {
    this.energyValueSelected.emit(advertisement);
  }

  onNewAdvertisement() {
    this.router.navigateByUrl('/new');
  }
}
