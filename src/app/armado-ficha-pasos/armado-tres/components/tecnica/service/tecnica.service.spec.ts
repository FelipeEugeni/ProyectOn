import {TestBed} from '@angular/core/testing';

import {TecnicaService} from './tecnica.service';

describe('CrearTecnicaService', () => {
  let service: TecnicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TecnicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
