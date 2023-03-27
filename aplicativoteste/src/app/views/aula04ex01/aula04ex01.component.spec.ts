import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula04ex01Component } from './aula04ex01.component';

describe('Aula04ex01Component', () => {
  let component: Aula04ex01Component;
  let fixture: ComponentFixture<Aula04ex01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aula04ex01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aula04ex01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
