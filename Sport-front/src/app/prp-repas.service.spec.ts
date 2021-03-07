import { TestBed } from '@angular/core/testing';

import { PrpRepasService } from './prp-repas.service';

describe('PrpRepasService', () => {
  let service: PrpRepasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrpRepasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
