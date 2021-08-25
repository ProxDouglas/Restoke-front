import { TestBed } from '@angular/core/testing';

import { CadastroFornecedor } from './cadastro-fornecedor.service';

describe('CadastroServiceService', () => {
  let service: CadastroFornecedor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroFornecedor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
