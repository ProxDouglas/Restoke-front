import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentanteCadastroFormComponent } from './representante-cadastro-form.component';

describe('RepresentanteCadastroFormComponent', () => {
  let component: RepresentanteCadastroFormComponent;
  let fixture: ComponentFixture<RepresentanteCadastroFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepresentanteCadastroFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepresentanteCadastroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
