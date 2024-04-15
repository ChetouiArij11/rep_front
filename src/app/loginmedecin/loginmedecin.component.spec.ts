import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginmedecinComponent } from './loginmedecin.component';

describe('LoginmedecinComponent', () => {
  let component: LoginmedecinComponent;
  let fixture: ComponentFixture<LoginmedecinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginmedecinComponent]
    });
    fixture = TestBed.createComponent(LoginmedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
