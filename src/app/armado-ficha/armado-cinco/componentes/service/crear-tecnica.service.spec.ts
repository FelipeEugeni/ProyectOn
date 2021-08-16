import { TestBed } from '@angular/core/testing';

import { CrearTecnicaService } from './crear-tecnica.service';

describe('CrearTecnicaService', () => {
  let service: CrearTecnicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearTecnicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
