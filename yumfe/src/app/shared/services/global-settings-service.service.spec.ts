import { TestBed, inject } from '@angular/core/testing';

import { GlobalSettingsServiceService } from './global-settings-service.service';

describe('GlobalSettingsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalSettingsServiceService]
    });
  });

  it('should ...', inject([GlobalSettingsServiceService], (service: GlobalSettingsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
