import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atv08Component } from './atv08.component';

describe('Atv08Component', () => {
  let component: Atv08Component;
  let fixture: ComponentFixture<Atv08Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Atv08Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Atv08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
