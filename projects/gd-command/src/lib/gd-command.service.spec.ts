import { TestBed } from '@angular/core/testing';

import { GdCommandService } from './gd-command.service';

describe('GdCommandService', () => {
  let service: GdCommandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GdCommandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
