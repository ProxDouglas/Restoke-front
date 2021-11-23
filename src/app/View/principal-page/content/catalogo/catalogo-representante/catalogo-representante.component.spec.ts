import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoRepresentanteComponent } from './catalogo-representante.component';

describe('PrincipalPageComponent', () => {
  let component: CatalogoRepresentanteComponent;
  let fixture: ComponentFixture<CatalogoRepresentanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoRepresentanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoRepresentanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function beforeEach(arg0: () => void) {
    throw new Error('Function not implemented.');
}

