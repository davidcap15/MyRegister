import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpalmeComponent } from './empalme.component';

describe('EmpalmeComponent', () => {
  let component: EmpalmeComponent;
  let fixture: ComponentFixture<EmpalmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpalmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpalmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
