import { TestBed } from '@angular/core/testing';

import { DigFireService } from './dig-fire.service';

describe('DigFireService', () => {
  let service: DigFireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigFireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
