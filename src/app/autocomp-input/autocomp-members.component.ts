import {Component, Input, OnInit} from '@angular/core';
import {map, startWith} from "rxjs/operators";
import {ClubMember} from "../../model/club-member";
import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-autocomp-member',
  templateUrl: './autocomp-members.component.html',
  styleUrls: ['./autocomp-members.component.css']
})
export class AutocompMembersComponent implements OnInit {
  @Input()
  title: string
  @Input()
  clubMembers: ClubMember[]
  @Input()
  control: FormControl;

  filteredOptions: Observable<ClubMember[]>;

  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.control.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.clubMembers.slice())
      );
  }

  private _filter(name: string): ClubMember[] {
    const filterValue = name.toLowerCase();
    return this.clubMembers.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  displayFn(member: ClubMember): string {
    return member && member.name ? member.name : '';
  }
}
