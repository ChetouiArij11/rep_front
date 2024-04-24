import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutficheComponent } from './ajoutfiche.component';

describe('AjoutficheComponent', () => {
  let component: AjoutficheComponent;
  let fixture: ComponentFixture<AjoutficheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutficheComponent]
    });
    fixture = TestBed.createComponent(AjoutficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
