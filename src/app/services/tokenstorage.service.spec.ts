/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TokenstorageService } from './tokenstorage.service';

describe('Service: Tokenstorage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenstorageService]
    });
  });

  it('should ...', inject([TokenstorageService], (service: TokenstorageService) => {
    expect(service).toBeTruthy();
  }));
});
