import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCardComponent } from './work-card.component';

describe('WorkCardComponent', () => {
  let component: WorkCardComponent;
  let fixture: ComponentFixture<WorkCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
