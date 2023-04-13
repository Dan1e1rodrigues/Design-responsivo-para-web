import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atv10Component } from './atv10.component';

describe('Atv10Component', () => {
  let component: Atv10Component;
  let fixture: ComponentFixture<Atv10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Atv10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Atv10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
