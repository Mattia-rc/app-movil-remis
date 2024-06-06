import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosMovilComponent } from './servicios-movil.component';

describe('ServiciosMovilComponent', () => {
  let component: ServiciosMovilComponent;
  let fixture: ComponentFixture<ServiciosMovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosMovilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiciosMovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
