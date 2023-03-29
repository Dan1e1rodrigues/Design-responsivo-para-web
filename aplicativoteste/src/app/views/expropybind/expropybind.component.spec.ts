import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpropybindComponent } from './expropybind.component';

describe('ExpropybindComponent', () => {
  let component: ExpropybindComponent;
  let fixture: ComponentFixture<ExpropybindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpropybindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpropybindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
