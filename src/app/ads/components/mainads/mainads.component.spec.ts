import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainadsComponent } from './mainads.component';

describe('MainadsComponent', () => {
  let component: MainadsComponent;
  let fixture: ComponentFixture<MainadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
