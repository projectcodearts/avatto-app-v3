import { TestBed } from '@angular/core/testing';

import { EligiblityDetailsService } from './eligiblity-details.service';

describe('EligiblityDetailsService', () => {
  let service: EligiblityDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EligiblityDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
