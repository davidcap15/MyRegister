import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoHerramientasComponent } from './ingreso-herramientas.component';

describe('IngresoHerramientasComponent', () => {
  let component: IngresoHerramientasComponent;
  let fixture: ComponentFixture<IngresoHerramientasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoHerramientasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoHerramientasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
