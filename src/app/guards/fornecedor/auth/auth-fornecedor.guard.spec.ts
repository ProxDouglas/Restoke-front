import { TestBed } from '@angular/core/testing';

import { AuthFornecedorGuard } from './auth-fornecedor.guard';

describe('AuthGuardService', () => {
  let service: AuthFornecedorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthFornecedorGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
