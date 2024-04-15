import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemaqndemedecinComponent } from './demaqndemedecin.component';

describe('DemaqndemedecinComponent', () => {
  let component: DemaqndemedecinComponent;
  let fixture: ComponentFixture<DemaqndemedecinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemaqndemedecinComponent]
    });
    fixture = TestBed.createComponent(DemaqndemedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
