import { TestBed } from '@angular/core/testing';

import { CadastroFornecedorService } from './cadastro-fornecedor.service';

describe('CadastroServiceService', () => {
  let service: CadastroFornecedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroFornecedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
