import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrendrerendezvousComponent } from './prendrerendezvous.component';

describe('PrendrerendezvousComponent', () => {
  let component: PrendrerendezvousComponent;
  let fixture: ComponentFixture<PrendrerendezvousComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrendrerendezvousComponent]
    });
    fixture = TestBed.createComponent(PrendrerendezvousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
