import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTecnicComponent } from './register-tecnic.component';

describe('RegisterTecnicComponent', () => {
  let component: RegisterTecnicComponent;
  let fixture: ComponentFixture<RegisterTecnicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterTecnicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterTecnicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
