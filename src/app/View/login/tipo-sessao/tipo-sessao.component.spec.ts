import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoSessaoComponent } from './tipo-sessao.component';

describe('TipoSessaoComponent', () => {
  let component: TipoSessaoComponent;
  let fixture: ComponentFixture<TipoSessaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoSessaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoSessaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
