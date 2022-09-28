import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateReportCardComponent } from './generate-report-card.component';

describe('GenerateReportCardComponent', () => {
  let component: GenerateReportCardComponent;
  let fixture: ComponentFixture<GenerateReportCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateReportCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateReportCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
