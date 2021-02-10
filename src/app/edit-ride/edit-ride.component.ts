import {Component, Inject, Input, OnInit} from '@angular/core';
import {Vehicle} from "../../model/vehicle";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ClubMember} from "../../model/club-member";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";

const MEMBERS_DATA: ClubMember[] = [
  {id: "m1", name: "Karl Klammer"},
  {id: "m2", name: "Siggi Sorglos"},
  {id: "m3", name: "Igor Tuppolevski"},
  {id: "m4", name: "Mario Zucchero"},
  {id: "m5", name: "Tina Cortez"}
];

@Component({
  selector: 'app-edit-ride',
  templateUrl: './edit-ride.component.html',
  styleUrls: ['./edit-ride.component.css']
})
export class EditRideComponent implements OnInit {
  vehicle: Vehicle;
  crewFormGroup: FormGroup;
  crewFormControl = new FormControl();

  crew1 = new FormControl();
  crew2 = new FormControl();
  clubMembers = MEMBERS_DATA;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {vehicle: Vehicle},
    public dialogRef: MatDialogRef<EditRideComponent>,
    private formBuilder: FormBuilder
  ) {
    this.vehicle = data.vehicle
    this.crewFormGroup = this.createForms(this.vehicle)

  }

  /**
   * Initialize a forms depending on properties from the vehicle, e.g. number of seats, etc.
   */
  private createForms(vehicle: Vehicle): FormGroup {
    let formGroup = this.formBuilder.group({
      distance: this.formBuilder.control('')
    });
    formGroup.addControl('cox', this.formBuilder.control(''))

    for (let i=1;i<this.vehicle.seats;i++) {
      formGroup.addControl(i.toString(),this.formBuilder.control(''))
    }

    return formGroup;
  }



  ngOnInit(): void {

  }





}
