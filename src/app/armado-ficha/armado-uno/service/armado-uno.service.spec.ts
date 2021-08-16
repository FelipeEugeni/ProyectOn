import { TestBed } from '@angular/core/testing';

import { ArmadoUnoService } from './armado-uno.service';

describe('ArmadoUnoService', () => {
  let service: ArmadoUnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArmadoUnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
