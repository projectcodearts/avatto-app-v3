import { TestBed } from '@angular/core/testing';

import { ShortQuestionDetailsService } from './short-question-details.service';

describe('ShortQuestionDetailsService', () => {
  let service: ShortQuestionDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShortQuestionDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
