import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeficheComponent } from './listefiche.component';

describe('ListeficheComponent', () => {
  let component: ListeficheComponent;
  let fixture: ComponentFixture<ListeficheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeficheComponent]
    });
    fixture = TestBed.createComponent(ListeficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
