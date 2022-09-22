/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TastingGroupService } from './tasting-group.service';

describe('Service: TastingGroup', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TastingGroupService]
    });
  });

  it('should ...', inject([TastingGroupService], (service: TastingGroupService) => {
    expect(service).toBeTruthy();
  }));
});
