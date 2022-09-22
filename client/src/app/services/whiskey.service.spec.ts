/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WhiskeyService } from './whiskey.service';

describe('Service: Whiskey', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WhiskeyService]
    });
  });

  it('should ...', inject([WhiskeyService], (service: WhiskeyService) => {
    expect(service).toBeTruthy();
  }));
});
