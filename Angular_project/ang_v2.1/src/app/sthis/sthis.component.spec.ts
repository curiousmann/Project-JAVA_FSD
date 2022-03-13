import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SthisComponent } from './sthis.component';

describe('SthisComponent', () => {
  let component: SthisComponent;
  let fixture: ComponentFixture<SthisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SthisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SthisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
