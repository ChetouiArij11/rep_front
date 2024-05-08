import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuisommeComponent } from './quisomme.component';

describe('QuisommeComponent', () => {
  let component: QuisommeComponent;
  let fixture: ComponentFixture<QuisommeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuisommeComponent]
    });
    fixture = TestBed.createComponent(QuisommeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
