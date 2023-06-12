import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuindexComponent } from './menuindex.component';

describe('MenuindexComponent', () => {
  let component: MenuindexComponent;
  let fixture: ComponentFixture<MenuindexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuindexComponent]
    });
    fixture = TestBed.createComponent(MenuindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
