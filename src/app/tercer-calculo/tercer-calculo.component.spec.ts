import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TercerCalculoComponent } from './tercer-calculo.component';

describe('TercerCalculoComponent', () => {
  let component: TercerCalculoComponent;
  let fixture: ComponentFixture<TercerCalculoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TercerCalculoComponent]
    });
    fixture = TestBed.createComponent(TercerCalculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
