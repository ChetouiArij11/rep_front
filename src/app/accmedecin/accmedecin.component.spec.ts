import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccmedecinComponent } from './accmedecin.component';

describe('AccmedecinComponent', () => {
  let component: AccmedecinComponent;
  let fixture: ComponentFixture<AccmedecinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccmedecinComponent]
    });
    fixture = TestBed.createComponent(AccmedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
