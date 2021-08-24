import {TestBed} from '@angular/core/testing';

import {MagiasMenoresService} from './magias-menores.service';

describe('ArmadoCuatroService', () => {
  let service: MagiasMenoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagiasMenoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
