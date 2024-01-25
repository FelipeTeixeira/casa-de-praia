import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCheckInComponent } from './section-check-in.component';

describe('SectionCheckInComponent', () => {
  let component: SectionCheckInComponent;
  let fixture: ComponentFixture<SectionCheckInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionCheckInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionCheckInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
