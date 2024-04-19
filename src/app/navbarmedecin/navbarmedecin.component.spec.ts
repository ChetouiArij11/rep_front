import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarmedecinComponent } from './navbarmedecin.component';

describe('NavbarmedecinComponent', () => {
  let component: NavbarmedecinComponent;
  let fixture: ComponentFixture<NavbarmedecinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarmedecinComponent]
    });
    fixture = TestBed.createComponent(NavbarmedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
