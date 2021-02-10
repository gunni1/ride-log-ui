import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompMembersComponent } from './autocomp-members.component';

describe('AutocompInputComponent', () => {
  let component: AutocompMembersComponent;
  let fixture: ComponentFixture<AutocompMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
