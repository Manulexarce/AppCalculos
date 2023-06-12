import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerCalculoComponent } from './primer-calculo.component';

describe('PrimerCalculoComponent', () => {
  let component: PrimerCalculoComponent;
  let fixture: ComponentFixture<PrimerCalculoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimerCalculoComponent]
    });
    fixture = TestBed.createComponent(PrimerCalculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
