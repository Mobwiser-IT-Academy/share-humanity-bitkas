import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitIssuesFormComponent } from './submit-issues-form.component';

describe('SubmitIssuesFormComponent', () => {
  let component: SubmitIssuesFormComponent;
  let fixture: ComponentFixture<SubmitIssuesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitIssuesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitIssuesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
