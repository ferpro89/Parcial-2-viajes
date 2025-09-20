import { TestBed } from '@angular/core/testing';

import { Turistas } from './turistas';

describe('Turistas', () => {
  let service: Turistas;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Turistas);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
