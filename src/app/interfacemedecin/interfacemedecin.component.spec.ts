import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfacemedecinComponent } from './interfacemedecin.component';

describe('InterfacemedecinComponent', () => {
  let component: InterfacemedecinComponent;
  let fixture: ComponentFixture<InterfacemedecinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterfacemedecinComponent]
    });
    fixture = TestBed.createComponent(InterfacemedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
