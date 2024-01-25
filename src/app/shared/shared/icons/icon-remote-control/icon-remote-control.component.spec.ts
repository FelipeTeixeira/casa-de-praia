import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconRemoteControlComponent } from './icon-remote-control.component';

describe('IconRemoteControlComponent', () => {
  let component: IconRemoteControlComponent;
  let fixture: ComponentFixture<IconRemoteControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconRemoteControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconRemoteControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
