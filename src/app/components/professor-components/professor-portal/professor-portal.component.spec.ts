import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorPortalComponent } from './professor-portal.component';

describe('ProfessorPortalComponent', () => {
  let component: ProfessorPortalComponent;
  let fixture: ComponentFixture<ProfessorPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorPortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
