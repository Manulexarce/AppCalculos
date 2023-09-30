import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuartoCalculoComponent } from './cuarto-calculo.component';

describe('CuartoCalculoComponent', () => {
  let component: CuartoCalculoComponent;
  let fixture: ComponentFixture<CuartoCalculoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuartoCalculoComponent]
    });
    fixture = TestBed.createComponent(CuartoCalculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
