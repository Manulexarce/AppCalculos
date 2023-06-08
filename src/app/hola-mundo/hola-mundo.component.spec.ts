import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolaMundoComponent } from './hola-mundo.component';

describe('HolaMundoComponent', () => {
  let component: HolaMundoComponent;
  let fixture: ComponentFixture<HolaMundoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HolaMundoComponent]
    });
    fixture = TestBed.createComponent(HolaMundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
