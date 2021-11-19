import { TestBed } from '@angular/core/testing';

import { AuthRepresentanteGuard } from './auth-representante.guard';

describe('AuthGuardService', () => {
  let service: AuthRepresentanteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthRepresentanteGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
