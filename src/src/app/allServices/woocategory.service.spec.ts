import { TestBed } from '@angular/core/testing';

import { WoocategoryService } from './woocategory.service';

describe('WoocategoryService', () => {
  let service: WoocategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WoocategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
