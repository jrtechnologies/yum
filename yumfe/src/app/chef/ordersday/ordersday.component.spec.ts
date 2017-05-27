import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersdayComponent } from './ordersday.component';

describe('OrdersdayComponent', () => {
  let component: OrdersdayComponent;
  let fixture: ComponentFixture<OrdersdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
