import { TestBed, inject } from '@angular/core/testing';

import { FoodsService } from './foods.service';

describe('FoodsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodsService]
    });
  });

  it('should ...', inject([FoodsService], (service: FoodsService) => {
    expect(service).toBeTruthy();
  }));
});
