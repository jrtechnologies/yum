import { TestBed, async, inject } from '@angular/core/testing';

import { AppRouteGuard } from './app-route.guard';

describe('AppRouteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppRouteGuard]
    });
  });

  it('should ...', inject([AppRouteGuard], (guard: AppRouteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
