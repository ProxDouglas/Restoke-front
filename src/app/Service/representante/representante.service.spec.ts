import { TestBed } from '@angular/core/testing';

import { RepresentanteService } from './representante.service';

describe('CadastroRepresentanteService', () => {
  let service: RepresentanteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepresentanteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
