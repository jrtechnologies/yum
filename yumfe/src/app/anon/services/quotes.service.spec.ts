import { TestBed, inject } from '@angular/core/testing';

import { QuotesService } from './quotes.service';

describe('QuotesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuotesService]
    });
  });

  it('should be created', inject([QuotesService], (service: QuotesService) => {
    expect(service).toBeTruthy();
  }));
});
