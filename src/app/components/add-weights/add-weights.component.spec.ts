import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWeightsComponent } from './add-weights.component';

describe('AddWeightsComponent', () => {
  let component: AddWeightsComponent;
  let fixture: ComponentFixture<AddWeightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWeightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWeightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
