import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HungryNavComponent } from './hungry-nav.component';

describe('HungryNavComponent', () => {
  let component: HungryNavComponent;
  let fixture: ComponentFixture<HungryNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HungryNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HungryNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
