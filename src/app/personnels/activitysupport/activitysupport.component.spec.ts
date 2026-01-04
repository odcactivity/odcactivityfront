import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitysupportComponent } from './activitysupport.component';

describe('ActivitysupportComponent', () => {
  let component: ActivitysupportComponent;
  let fixture: ComponentFixture<ActivitysupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivitysupportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitysupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
