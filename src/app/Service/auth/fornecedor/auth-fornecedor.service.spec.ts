import { TestBed } from '@angular/core/testing';

import { AuthFornecedorService } from './auth-fornecedor.service';

describe('LoginService', () => {
  let service: AuthFornecedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthFornecedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
