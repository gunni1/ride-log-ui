import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RideSelectComponent } from './ride-select.component';

describe('RideSelectComponent', () => {
  let component: RideSelectComponent;
  let fixture: ComponentFixture<RideSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RideSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RideSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
