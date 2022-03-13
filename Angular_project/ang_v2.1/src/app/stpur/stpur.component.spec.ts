import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StpurComponent } from './stpur.component';

describe('StpurComponent', () => {
  let component: StpurComponent;
  let fixture: ComponentFixture<StpurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StpurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StpurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
