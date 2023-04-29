import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atv13Component } from './atv13.component';

describe('Atv13Component', () => {
  let component: Atv13Component;
  let fixture: ComponentFixture<Atv13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Atv13Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Atv13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
