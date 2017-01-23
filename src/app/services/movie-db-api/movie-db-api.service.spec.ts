/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MovieDbApiService } from './movie-db-api.service';

describe('MovieDbApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieDbApiService]
    });
  });

  it('should ...', inject([MovieDbApiService], (service: MovieDbApiService) => {
    expect(service).toBeTruthy();
  }));
});
