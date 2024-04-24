import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DejapatientComponent } from './dejapatient.component';

describe('DejapatientComponent', () => {
  let component: DejapatientComponent;
  let fixture: ComponentFixture<DejapatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DejapatientComponent]
    });
    fixture = TestBed.createComponent(DejapatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
