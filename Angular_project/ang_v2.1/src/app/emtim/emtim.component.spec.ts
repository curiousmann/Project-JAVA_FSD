import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmtimComponent } from './emtim.component';

describe('EmtimComponent', () => {
  let component: EmtimComponent;
  let fixture: ComponentFixture<EmtimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmtimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmtimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
