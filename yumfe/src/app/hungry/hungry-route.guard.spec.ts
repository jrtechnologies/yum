import { TestBed, async, inject } from '@angular/core/testing';

import { HungryRouteGuard } from './hungry-route.guard';

describe('HungryRouteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HungryRouteGuard]
    });
  });

  it('should ...', inject([HungryRouteGuard], (guard: HungryRouteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
