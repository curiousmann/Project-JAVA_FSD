import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployyeComponent } from './employye.component';

describe('EmployyeComponent', () => {
  let component: EmployyeComponent;
  let fixture: ComponentFixture<EmployyeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployyeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
