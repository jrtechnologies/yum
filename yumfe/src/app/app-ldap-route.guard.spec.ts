import { TestBed, async, inject } from '@angular/core/testing';

import { AppLdapRouteGuard } from './app-ldap-route.guard';

describe('AppLdapRouteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppLdapRouteGuard]
    });
  });

  it('should ...', inject([AppLdapRouteGuard], (guard: AppLdapRouteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
