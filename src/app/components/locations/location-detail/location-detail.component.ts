import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
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
  //@Input() location: Location;
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
    console.log('test');
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onAddConverter() {
    this.router.navigate(['converter'], {relativeTo: this.route});
  }

  onAddEnergyValue(convId: string) {
    console.log('converter id: ' + convId);
    this.router.navigate([convId], {relativeTo: this.route});
  }

  onDeleteEnergyValue(converterId: string, energyValueId: string) {
    this.locationService.deleteEnergyValue(this.id, converterId, energyValueId);
    this.router.navigate(['/locations']);
  }





  public lineChartData:Array<any> = [
    {data: [3.4792531896286, 3.6794531596286, 3.1792531296286, 3.5792531296386, 2.7792531296286], label: 'Avans Beukenlaan 1 (dak 1)'},
    {data: [3.5792531896286, 3.7792531896286, 2.9792531896286, 3.1792531296286, 3.2792531296286], label: 'Avans Beukenlaan 1 (dak 2)'},
  ];

  public lineChartLabels:Array<any> = ['12/1/2018', '13/1/2018', '14/1/2018', '15/1/2018', '16/1/2018' ];

  public lineChartOptions:any = {
    responsive: true,
  };

  public lineChartColors:Array<any> = [

    {
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(0,0,180,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    },
    {
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(0,180,0,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    {
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';


  public chartClicked(e:any){
    console.log(e);
  }

  public chartHovered(e:any){
    console.log(e);
  }

  public onRemoveConverter(converterId: string) {
    console.log('id voor verwijderen: ' + converterId);
    this.locationService.removeConverterFromLocation(this.id, converterId);
    this.router.navigate(['locations']);
  }
}
