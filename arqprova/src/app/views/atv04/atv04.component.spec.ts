import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atv04Component } from './atv04.component';

describe('Atv04Component', () => {
  let component: Atv04Component;
  let fixture: ComponentFixture<Atv04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Atv04Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Atv04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
