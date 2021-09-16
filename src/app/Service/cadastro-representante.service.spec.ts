import { TestBed } from '@angular/core/testing';

import { CadastroRepresentante } from './cadastro-representante.service';

describe('CadastroRepresentanteService', () => {
  let service: CadastroRepresentante;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroRepresentante);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
