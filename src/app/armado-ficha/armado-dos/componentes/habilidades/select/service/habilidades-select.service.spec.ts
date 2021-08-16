import { TestBed } from '@angular/core/testing';

import { HabilidadesSelectService } from './habilidades-select.service';

describe('HabilidadesSelectService', () => {
  let service: HabilidadesSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabilidadesSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
