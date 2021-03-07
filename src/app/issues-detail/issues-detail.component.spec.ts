import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesDetailComponent } from './issues-detail.component';

describe('DescriptionComponent', () => {
  let component: IssuesDetailComponent;
  let fixture: ComponentFixture<IssuesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
