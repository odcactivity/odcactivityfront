import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportinghebdoComponent } from './reportinghebdo.component';

describe('ReportinghebdoComponent', () => {
  let component: ReportinghebdoComponent;
  let fixture: ComponentFixture<ReportinghebdoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportinghebdoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportinghebdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});