import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardmedecinComponent } from './cardmedecin.component';

describe('CardmedecinComponent', () => {
  let component: CardmedecinComponent;
  let fixture: ComponentFixture<CardmedecinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardmedecinComponent]
    });
    fixture = TestBed.createComponent(CardmedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
