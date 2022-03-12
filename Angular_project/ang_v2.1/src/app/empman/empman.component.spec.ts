import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpmanComponent } from './empman.component';

describe('EmpmanComponent', () => {
  let component: EmpmanComponent;
  let fixture: ComponentFixture<EmpmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpmanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
