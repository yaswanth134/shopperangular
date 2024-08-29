import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferingdealsComponent } from './offeringdeals.component';

describe('OfferingdealsComponent', () => {
  let component: OfferingdealsComponent;
  let fixture: ComponentFixture<OfferingdealsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferingdealsComponent]
    });
    fixture = TestBed.createComponent(OfferingdealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
