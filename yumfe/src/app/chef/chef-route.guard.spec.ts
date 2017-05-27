import { TestBed, async, inject } from '@angular/core/testing';

import { ChefRouteGuard } from './chef-route.guard';

describe('ChefRouteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChefRouteGuard]
    });
  });

  it('should ...', inject([ChefRouteGuard], (guard: ChefRouteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
