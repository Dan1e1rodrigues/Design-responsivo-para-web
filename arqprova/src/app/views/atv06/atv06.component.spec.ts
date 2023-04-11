import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atv06Component } from './atv06.component';

describe('Atv06Component', () => {
  let component: Atv06Component;
  let fixture: ComponentFixture<Atv06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Atv06Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Atv06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
