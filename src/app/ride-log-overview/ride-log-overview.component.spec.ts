import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RideLogOverviewComponent } from './ride-log-overview.component';

describe('RideLogOverviewComponent', () => {
  let component: RideLogOverviewComponent;
  let fixture: ComponentFixture<RideLogOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RideLogOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RideLogOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
