import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthNavComponent } from './month-nav.component';

describe('MonthNavComponent', () => {
  let component: MonthNavComponent;
  let fixture: ComponentFixture<MonthNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
