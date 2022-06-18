import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTecnicComponent } from './profiletecnic.component';

describe('ProfileTecnicComponent', () => {
  let component: ProfileTecnicComponent;
  let fixture: ComponentFixture<ProfileTecnicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileTecnicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileTecnicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
