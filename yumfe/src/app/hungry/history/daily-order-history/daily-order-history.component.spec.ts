import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyOrderHistoryComponent } from './daily-order-history.component';

describe('DailyOrderHistoryComponent', () => {
  let component: DailyOrderHistoryComponent;
  let fixture: ComponentFixture<DailyOrderHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyOrderHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyOrderHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
