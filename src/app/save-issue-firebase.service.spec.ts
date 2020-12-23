import { TestBed } from '@angular/core/testing';

import { SaveIssueFirebaseService } from './save-issue-firebase.service';

describe('SaveIssueFirebaseService', () => {
  let service: SaveIssueFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveIssueFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
