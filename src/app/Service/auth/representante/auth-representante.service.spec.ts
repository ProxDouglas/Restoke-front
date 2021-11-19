import { TestBed } from '@angular/core/testing';

import { AuthRepresentanteService } from './auth-representante.service';

describe('LoginService', () => {
  let service: AuthRepresentanteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthRepresentanteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
