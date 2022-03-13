import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbillComponent } from './embill.component';

describe('EmbillComponent', () => {
  let component: EmbillComponent;
  let fixture: ComponentFixture<EmbillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
