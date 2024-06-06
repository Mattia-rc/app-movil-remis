import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioVistaComponent } from './inicio-vista.component';

describe('InicioVistaComponent', () => {
  let component: InicioVistaComponent;
  let fixture: ComponentFixture<InicioVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioVistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InicioVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
