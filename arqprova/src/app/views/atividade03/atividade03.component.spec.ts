import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade03Component } from './atividade03.component';

describe('Atividade03Component', () => {
  let component: Atividade03Component;
  let fixture: ComponentFixture<Atividade03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Atividade03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Atividade03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
