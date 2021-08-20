import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGeralComponent } from './menu-geral.component';

describe('MenuGeralComponent', () => {
  let component: MenuGeralComponent;
  let fixture: ComponentFixture<MenuGeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuGeralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
