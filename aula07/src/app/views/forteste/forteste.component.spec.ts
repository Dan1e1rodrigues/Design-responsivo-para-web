import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortesteComponent } from './forteste.component';

describe('FortesteComponent', () => {
  let component: FortesteComponent;
  let fixture: ComponentFixture<FortesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FortesteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FortesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
