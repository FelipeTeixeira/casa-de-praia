import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPoolComponent } from './section-pool.component';

describe('SectionPoolComponent', () => {
  let component: SectionPoolComponent;
  let fixture: ComponentFixture<SectionPoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionPoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
