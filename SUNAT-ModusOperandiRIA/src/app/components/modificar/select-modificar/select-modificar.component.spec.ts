import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectModificarComponent } from './select-modificar.component';

describe('SelectModificarComponent', () => {
  let component: SelectModificarComponent;
  let fixture: ComponentFixture<SelectModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectModificarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
