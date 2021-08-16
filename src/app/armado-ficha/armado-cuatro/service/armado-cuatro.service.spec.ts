import { TestBed } from '@angular/core/testing';

import { ArmadoCuatroService } from './armado-cuatro.service';

describe('ArmadoCuatroService', () => {
  let service: ArmadoCuatroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArmadoCuatroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
