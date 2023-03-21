import { TestBed } from '@angular/core/testing';

import { ForcaService } from './forca.service';

describe('ForcaService', () => {
  let service: ForcaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForcaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
