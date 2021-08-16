import { TestBed } from '@angular/core/testing';

import { HabilidadesHeroeService } from './habilidades-heroe.service';

describe('HabilidadesHeroeService', () => {
  let service: HabilidadesHeroeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabilidadesHeroeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
