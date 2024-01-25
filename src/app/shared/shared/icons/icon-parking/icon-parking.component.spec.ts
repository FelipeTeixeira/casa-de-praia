import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconParkingComponent } from './icon-parking.component';

describe('IconParkingComponent', () => {
  let component: IconParkingComponent;
  let fixture: ComponentFixture<IconParkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconParkingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
