import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Auula3Component } from './auula3.component';

describe('Auula3Component', () => {
  let component: Auula3Component;
  let fixture: ComponentFixture<Auula3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Auula3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Auula3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
