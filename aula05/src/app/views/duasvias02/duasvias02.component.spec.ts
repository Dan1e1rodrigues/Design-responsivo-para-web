import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Duasvias02Component } from './duasvias02.component';

describe('Duasvias02Component', () => {
  let component: Duasvias02Component;
  let fixture: ComponentFixture<Duasvias02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Duasvias02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Duasvias02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
