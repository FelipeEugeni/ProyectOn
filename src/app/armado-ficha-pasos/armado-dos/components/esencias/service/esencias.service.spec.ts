import {TestBed} from '@angular/core/testing';

import {EsenciasService} from './esencias.service';

describe('EsenciasService', () => {
  let service: EsenciasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EsenciasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
