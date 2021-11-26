import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentanteCadastroComponent } from './representante-cadastro.component';

describe('RepresentanteCadastroFormComponent', () => {
  let component: RepresentanteCadastroComponent;
  let fixture: ComponentFixture<RepresentanteCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepresentanteCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepresentanteCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
