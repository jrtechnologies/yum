import { TestBed, async, inject } from '@angular/core/testing';

import { AppExtAuthRouteGuard } from './app-extAuth-route.guard';

describe('AppLdapRouteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppExtAuthRouteGuard]
    });
  });

  it('should ...', inject([AppExtAuthRouteGuard], (guard: AppExtAuthRouteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
