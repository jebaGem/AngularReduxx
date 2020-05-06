import { TestBed, inject } from '@angular/core/testing';

import { JokesServiceService } from './jokes-service.service';

describe('JokesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JokesServiceService]
    });
  });

  it('should be created', inject([JokesServiceService], (service: JokesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
