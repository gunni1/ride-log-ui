import {Component, Inject, Input, OnInit} from '@angular/core';
import {Vehicle} from "../../model/vehicle";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ClubMember} from "../../model/club-member";
import {FormControl} from "@angular/forms";
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
  crewFormControl = new FormControl();
  filteredOptions: Observable<ClubMember[]>;
  clubMembers = MEMBERS_DATA;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {vehicle: Vehicle},
    public dialogRef: MatDialogRef<EditRideComponent>
  ) {
    this.vehicle = data.vehicle
  }



  ngOnInit(): void {
    this.filteredOptions = this.crewFormControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.clubMembers.slice())
      );
  }

  displayFn(member: ClubMember): string {
    return member && member.name ? member.name : '';
  }

  private _filter(name: string): ClubMember[] {
    const filterValue = name.toLowerCase();

    return this.clubMembers.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

}
