import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilemedecinComponent } from './profilemedecin.component';

describe('ProfilemedecinComponent', () => {
  let component: ProfilemedecinComponent;
  let fixture: ComponentFixture<ProfilemedecinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilemedecinComponent]
    });
    fixture = TestBed.createComponent(ProfilemedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
