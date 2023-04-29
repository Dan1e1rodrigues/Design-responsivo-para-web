import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atv07Component } from './atv07.component';

describe('Atv07Component', () => {
  let component: Atv07Component;
  let fixture: ComponentFixture<Atv07Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Atv07Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Atv07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
