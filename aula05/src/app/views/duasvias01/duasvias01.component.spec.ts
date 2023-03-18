import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Duasvias01Component } from './duasvias01.component';

describe('Duasvias01Component', () => {
  let component: Duasvias01Component;
  let fixture: ComponentFixture<Duasvias01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Duasvias01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Duasvias01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
