import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdshipComponent } from './adship.component';

describe('AdshipComponent', () => {
  let component: AdshipComponent;
  let fixture: ComponentFixture<AdshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
