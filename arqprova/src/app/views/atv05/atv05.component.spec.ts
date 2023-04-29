import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atv05Component } from './atv05.component';

describe('Atv05Component', () => {
  let component: Atv05Component;
  let fixture: ComponentFixture<Atv05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Atv05Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Atv05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
