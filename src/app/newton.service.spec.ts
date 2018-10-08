import { TestBed } from '@angular/core/testing';

import { NewtonService } from './newton.service';

describe('NewtonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewtonService = TestBed.get(NewtonService);
    expect(service).toBeTruthy();
  });
});
