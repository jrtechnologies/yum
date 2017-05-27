import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefNavComponent } from './chef-nav.component';

describe('ChefNavComponent', () => {
  let component: ChefNavComponent;
  let fixture: ComponentFixture<ChefNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
