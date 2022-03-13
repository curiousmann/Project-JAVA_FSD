import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdstoComponent } from './adsto.component';

describe('AdstoComponent', () => {
  let component: AdstoComponent;
  let fixture: ComponentFixture<AdstoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdstoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdstoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
