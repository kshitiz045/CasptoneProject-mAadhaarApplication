import { TestBed } from '@angular/core/testing';

import { FreshCardService } from './fresh-card.service';

describe('FreshCardService', () => {
  let service: FreshCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreshCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
