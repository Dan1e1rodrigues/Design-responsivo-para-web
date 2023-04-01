import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExempforComponent } from './exempfor.component';

describe('ExempforComponent', () => {
  let component: ExempforComponent;
  let fixture: ComponentFixture<ExempforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExempforComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExempforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
