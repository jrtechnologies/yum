import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodInlineEditComponent } from './food-inline-edit.component';

describe('FoodInlineEditComponent', () => {
  let component: FoodInlineEditComponent;
  let fixture: ComponentFixture<FoodInlineEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodInlineEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodInlineEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
