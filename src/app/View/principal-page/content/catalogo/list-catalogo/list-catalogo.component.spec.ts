import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCatalogoComponent } from './list-catalogo.component';

describe('ListCatalogoComponent', () => {
  let component: ListCatalogoComponent;
  let fixture: ComponentFixture<ListCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCatalogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
