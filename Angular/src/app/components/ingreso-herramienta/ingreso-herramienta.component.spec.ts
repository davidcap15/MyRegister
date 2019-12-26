import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoHerramientaComponent } from './ingreso-herramienta.component';

describe('IngresoHerramientaComponent', () => {
  let component: IngresoHerramientaComponent;
  let fixture: ComponentFixture<IngresoHerramientaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoHerramientaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoHerramientaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
