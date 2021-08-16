import { TestBed } from '@angular/core/testing';

import { MostrarTecnicaService } from './mostrar-tecnica.service';

describe('MostrarTecnicaService', () => {
  let service: MostrarTecnicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostrarTecnicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
