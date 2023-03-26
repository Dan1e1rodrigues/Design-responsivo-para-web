import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testeexercicio02Component } from './testeexercicio02.component';

describe('Testeexercicio02Component', () => {
  let component: Testeexercicio02Component;
  let fixture: ComponentFixture<Testeexercicio02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Testeexercicio02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testeexercicio02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
