import { TestBed } from '@angular/core/testing';

import { GeneradorService } from './generador.service';

describe('GeneradorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeneradorService = TestBed.get(GeneradorService);
    expect(service).toBeTruthy();
  });
});
