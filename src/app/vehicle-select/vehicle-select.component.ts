import { Component, OnInit } from '@angular/core';



/**
 * Static Data for Testing
 */
export interface Vehicle {
  name: string;
  vehicleClass: string;
}

const VEHICLE_DATA: Vehicle[] = [
  {name: 'Saxonia', vehicleClass: '8+'},
  {name: 'St. Cathrin', vehicleClass: '4-'},
  {name: 'Gelber Drache', vehicleClass: '2-'}
];

@Component({
  selector: 'app-vehicle-select',
  templateUrl: './vehicle-select.component.html',
  styleUrls: ['./vehicle-select.component.css']
})
export class VehicleSelectComponent implements OnInit {

  constructor() { }

  vehicleDataSource = VEHICLE_DATA;
  displayedColumns: string[] = ['name', 'vehicleClass'];

  ngOnInit(): void {
  }

}
