import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ativ01Component } from './ativ01.component';

describe('Ativ01Component', () => {
  let component: Ativ01Component;
  let fixture: ComponentFixture<Ativ01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ativ01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ativ01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
