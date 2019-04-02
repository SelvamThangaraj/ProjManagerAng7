import { TestBed } from '@angular/core/testing';

import { BaseprojectService } from './baseproject.service';

describe('BaseprojectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseprojectService = TestBed.get(BaseprojectService);
    expect(service).toBeTruthy();
  });
});
