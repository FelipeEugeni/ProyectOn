import { TestBed } from '@angular/core/testing';

import { ArmadoCincoService } from './armado-cinco.service';

describe('ArmadoCincoService', () => {
  let service: ArmadoCincoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArmadoCincoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
