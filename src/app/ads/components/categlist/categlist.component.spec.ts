import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateglistComponent } from './categlist.component';

describe('CateglistComponent', () => {
  let component: CateglistComponent;
  let fixture: ComponentFixture<CateglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CateglistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CateglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
