import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atv12Component } from './atv12.component';

describe('Atv12Component', () => {
  let component: Atv12Component;
  let fixture: ComponentFixture<Atv12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Atv12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Atv12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
