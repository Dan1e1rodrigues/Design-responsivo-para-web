import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atv03Component } from './atv03.component';

describe('Atv03Component', () => {
  let component: Atv03Component;
  let fixture: ComponentFixture<Atv03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Atv03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Atv03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
