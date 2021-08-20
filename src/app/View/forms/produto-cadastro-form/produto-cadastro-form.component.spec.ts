import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoCadastroFormComponent } from './produto-cadastro-form.component';

describe('FormCadastroComponent', () => {
  let component: ProdutoCadastroFormComponent;
  let fixture: ComponentFixture<ProdutoCadastroFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoCadastroFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoCadastroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
