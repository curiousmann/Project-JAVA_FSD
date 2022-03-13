import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolempComponent } from './enrolemp.component';

describe('EnrolempComponent', () => {
  let component: EnrolempComponent;
  let fixture: ComponentFixture<EnrolempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrolempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
