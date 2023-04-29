import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atv02dataComponent } from './atv02data.component';

describe('Atv02dataComponent', () => {
  let component: Atv02dataComponent;
  let fixture: ComponentFixture<Atv02dataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Atv02dataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Atv02dataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
