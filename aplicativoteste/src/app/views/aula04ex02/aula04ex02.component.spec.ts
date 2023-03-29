import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula04ex02Component } from './aula04ex02.component';

describe('Aula04ex02Component', () => {
  let component: Aula04ex02Component;
  let fixture: ComponentFixture<Aula04ex02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aula04ex02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aula04ex02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
