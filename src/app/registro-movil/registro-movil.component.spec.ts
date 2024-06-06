import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroMovilComponent } from './registro-movil.component';

describe('RegistroMovilComponent', () => {
  let component: RegistroMovilComponent;
  let fixture: ComponentFixture<RegistroMovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroMovilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroMovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
