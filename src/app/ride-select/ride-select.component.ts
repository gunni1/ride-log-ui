import { Component, OnInit } from '@angular/core';



/**
 * Static Data for Testing
 */
export interface Ride {
  name: string;
  rideClass: string;
}

const RIDE_DATA: Ride[] = [
  {name: 'Saxonia', rideClass: '8+'},
  {name: 'St. Cathrin', rideClass: '4-'},
  {name: 'Gelber Drache', rideClass: '2-'}
];

@Component({
  selector: 'app-ride-select',
  templateUrl: './ride-select.component.html',
  styleUrls: ['./ride-select.component.css']
})
export class RideSelectComponent implements OnInit {

  constructor() { }

  tableDataSource = RIDE_DATA;
  displayedColumns: string[] = ['name', 'rideClass'];

  ngOnInit(): void {
  }

}
