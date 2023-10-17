import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadrosPagesComponent } from './cuadros-pages.component';

describe('CuadrosPagesComponent', () => {
  let component: CuadrosPagesComponent;
  let fixture: ComponentFixture<CuadrosPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadrosPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadrosPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
