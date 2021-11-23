import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoEditComponent } from './catalogo-edit.component';

describe('PrincipalPageComponent', () => {
  let component: CatalogoEditComponent;
  let fixture: ComponentFixture<CatalogoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
