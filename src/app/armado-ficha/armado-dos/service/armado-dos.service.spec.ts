import { TestBed } from '@angular/core/testing';

import { ArmadoDosService } from './armado-dos.service';

describe('ArmadoDosService', () => {
  let service: ArmadoDosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArmadoDosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
