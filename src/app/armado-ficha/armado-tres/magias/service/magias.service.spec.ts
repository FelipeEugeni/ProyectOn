import { TestBed } from '@angular/core/testing';

import { MagiasService } from './magias.service';

describe('MagiasService', () => {
  let service: MagiasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagiasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
