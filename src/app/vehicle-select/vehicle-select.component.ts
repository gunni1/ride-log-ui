import { Component, OnInit } from '@angular/core';
import {Vehicle} from "../../model/vehicle";
import {EditRideComponent} from "../edit-ride/edit-ride.component";
import {MatDialog} from "@angular/material/dialog";

const VEHICLE_DATA: Vehicle[] = [
  {id:"1",name: 'Saxonia', vehicleClass: '8+',coxed: true, seats: 8},
  {id: "2", name: 'St. Cathrin', vehicleClass: '4-', coxed: false, seats: 4},
  {id: "3", name: 'Gelber Drache', vehicleClass: '2-', coxed: false, seats: 2}
];

@Component({
  selector: 'app-vehicle-select',
  templateUrl: './vehicle-select.component.html',
  styleUrls: ['./vehicle-select.component.css']
})
export class VehicleSelectComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  vehicleDataSource = VEHICLE_DATA;
  displayedColumns: string[] = ['name', 'vehicleClass'];

  ngOnInit(): void {
  }

  openBeginRideDialog(selected: Vehicle) {
    this.dialog.open(EditRideComponent, {
      data: { vehicle: selected}
    })
  }
}
