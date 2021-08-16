import { TestBed } from '@angular/core/testing';

import { MagiasSelectService } from './magias-select.service.ts';

describe('MagiasSelectServiceService', () => {
  let service: MagiasSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagiasSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
