import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atv01Component } from './atv01.component';

describe('Atv01Component', () => {
  let component: Atv01Component;
  let fixture: ComponentFixture<Atv01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Atv01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Atv01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
