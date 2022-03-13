import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmtskComponent } from './emtsk.component';

describe('EmtskComponent', () => {
  let component: EmtskComponent;
  let fixture: ComponentFixture<EmtskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmtskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmtskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
