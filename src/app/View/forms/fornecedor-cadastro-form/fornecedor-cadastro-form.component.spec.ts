import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedorCadastroFormComponent } from './fornecedor-cadastro-form.component';

describe('FornecedorCadastroFormComponent', () => {
  let component: FornecedorCadastroFormComponent;
  let fixture: ComponentFixture<FornecedorCadastroFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FornecedorCadastroFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FornecedorCadastroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
