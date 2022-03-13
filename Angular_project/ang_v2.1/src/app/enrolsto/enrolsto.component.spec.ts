import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolstoComponent } from './enrolsto.component';

describe('EnrolstoComponent', () => {
  let component: EnrolstoComponent;
  let fixture: ComponentFixture<EnrolstoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrolstoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolstoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
