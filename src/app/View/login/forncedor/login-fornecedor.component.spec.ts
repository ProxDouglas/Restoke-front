import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFornecedorComponent } from './login-fornecedor.component';

describe('LoginComponent', () => {
  let component: LoginFornecedorComponent;
  let fixture: ComponentFixture<LoginFornecedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFornecedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
