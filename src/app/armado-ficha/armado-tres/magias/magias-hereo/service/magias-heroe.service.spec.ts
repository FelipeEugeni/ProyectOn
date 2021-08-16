import { TestBed } from '@angular/core/testing';

import { MagiasHeroeService } from './magias-heroe.service';

describe('MagiasHeroeService', () => {
  let service: MagiasHeroeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagiasHeroeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
