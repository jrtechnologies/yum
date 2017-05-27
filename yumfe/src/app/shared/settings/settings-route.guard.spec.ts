import { TestBed, async, inject } from '@angular/core/testing';

import { SettingsRouteGuard } from './settings-route.guard';

describe('SettingsRouteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SettingsRouteGuard]
    });
  });

  it('should ...', inject([SettingsRouteGuard], (guard: SettingsRouteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
