import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisListadoComponent } from './pais-listado.component';

describe('PaisListadoComponent', () => {
  let component: PaisListadoComponent;
  let fixture: ComponentFixture<PaisListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
