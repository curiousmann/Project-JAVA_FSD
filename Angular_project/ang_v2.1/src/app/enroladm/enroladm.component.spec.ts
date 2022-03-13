import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnroladmComponent } from './enroladm.component';

describe('EnroladmComponent', () => {
  let component: EnroladmComponent;
  let fixture: ComponentFixture<EnroladmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnroladmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnroladmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
