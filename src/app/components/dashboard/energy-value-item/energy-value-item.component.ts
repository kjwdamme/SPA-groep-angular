import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EnergyValueService} from '../../../services/energyvalue.service';
import {EnergyValue} from '../../../models/energyvalue.model';

@Component({
  selector: 'app-energy-value-item',
  templateUrl: './energy-value-item.component.html',
  styleUrls: ['./energy-value-item.component.css']
})
export class EnergyValueItemComponent implements OnInit {

  @Input() energyValue: EnergyValue;
  @Input() id: string;
  @Output() advertisementSelected = new EventEmitter<void>();

  constructor(private route: ActivatedRoute,
              private energyValueService: EnergyValueService,
              private router: Router) { }

  ngOnInit() {
    this.id = this.energyValue.id;
    console.log(this.energyValue);
  }

  onSelected() {
    this.advertisementSelected.emit();
  }

  // onDeleteFromFavorites() {
  //   this.adService.removeFromFavorites(this.id);
  //   this.router.navigate(['/advertisements']);
  // }

}
