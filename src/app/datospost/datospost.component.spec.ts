import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatospostComponent } from './datospost.component';

describe('DatospostComponent', () => {
  let component: DatospostComponent;
  let fixture: ComponentFixture<DatospostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatospostComponent]
    });
    fixture = TestBed.createComponent(DatospostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
