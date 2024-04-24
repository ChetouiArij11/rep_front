import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxrendezvousComponent } from './inboxrendezvous.component';

describe('InboxrendezvousComponent', () => {
  let component: InboxrendezvousComponent;
  let fixture: ComponentFixture<InboxrendezvousComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InboxrendezvousComponent]
    });
    fixture = TestBed.createComponent(InboxrendezvousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
