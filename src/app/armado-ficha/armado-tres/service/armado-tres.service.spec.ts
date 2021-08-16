import { TestBed } from '@angular/core/testing';

import { ArmadoTresService } from './armado-tres.service';

describe('ArmadoTresService', () => {
  let service: ArmadoTresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArmadoTresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
