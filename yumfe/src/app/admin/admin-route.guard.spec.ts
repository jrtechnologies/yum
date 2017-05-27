import { TestBed, async, inject } from '@angular/core/testing';

import { AdminRouteGuard } from './admin-route.guard';

describe('AdminRouteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminRouteGuard]
    });
  });

  it('should ...', inject([AdminRouteGuard], (guard: AdminRouteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
