import {TestBed} from '@angular/core/testing';

import {ModificadoresService} from './modificadores.service';

describe('ArmadoCincoService', () => {
  let service: ModificadoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificadoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
