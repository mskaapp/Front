import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilerecruiterComponent } from './profilerecruiter.component';

describe('ProfilerecruiterComponent', () => {
  let component: ProfilerecruiterComponent;
  let fixture: ComponentFixture<ProfilerecruiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilerecruiterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilerecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
