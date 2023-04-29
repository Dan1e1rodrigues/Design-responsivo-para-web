import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atv09Component } from './atv09.component';

describe('Atv09Component', () => {
  let component: Atv09Component;
  let fixture: ComponentFixture<Atv09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Atv09Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Atv09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
