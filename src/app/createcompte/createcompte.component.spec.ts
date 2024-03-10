import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecompteComponent } from './createcompte.component';

describe('CreatecompteComponent', () => {
  let component: CreatecompteComponent;
  let fixture: ComponentFixture<CreatecompteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatecompteComponent]
    });
    fixture = TestBed.createComponent(CreatecompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
