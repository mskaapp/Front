/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReclutadorService } from './reclutador.service';

describe('Service: Reclutador', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReclutadorService]
    });
  });

  it('should ...', inject([ReclutadorService], (service: ReclutadorService) => {
    expect(service).toBeTruthy();
  }));
});
