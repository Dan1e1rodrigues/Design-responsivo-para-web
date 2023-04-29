import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atv11Component } from './atv11.component';

describe('Atv11Component', () => {
  let component: Atv11Component;
  let fixture: ComponentFixture<Atv11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Atv11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Atv11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
