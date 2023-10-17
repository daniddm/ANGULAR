import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisetasPagesComponent } from './camisetas-pages.component';

describe('CamisetasPagesComponent', () => {
  let component: CamisetasPagesComponent;
  let fixture: ComponentFixture<CamisetasPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamisetasPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamisetasPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
