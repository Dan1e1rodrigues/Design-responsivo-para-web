import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ativ02Component } from './ativ02.component';

describe('Ativ02Component', () => {
  let component: Ativ02Component;
  let fixture: ComponentFixture<Ativ02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ativ02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ativ02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
