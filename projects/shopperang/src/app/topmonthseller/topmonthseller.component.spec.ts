import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopmonthsellerComponent } from './topmonthseller.component';

describe('TopmonthsellerComponent', () => {
  let component: TopmonthsellerComponent;
  let fixture: ComponentFixture<TopmonthsellerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopmonthsellerComponent]
    });
    fixture = TestBed.createComponent(TopmonthsellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
