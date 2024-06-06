import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeMovilComponent } from './informe-movil.component';

describe('InformeMovilComponent', () => {
  let component: InformeMovilComponent;
  let fixture: ComponentFixture<InformeMovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformeMovilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformeMovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
