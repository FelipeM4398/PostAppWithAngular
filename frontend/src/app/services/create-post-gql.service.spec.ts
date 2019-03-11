import { TestBed } from '@angular/core/testing';

import { CreatePostGqlService } from './create-post-gql.service';

describe('CreatePostGqlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreatePostGqlService = TestBed.get(CreatePostGqlService);
    expect(service).toBeTruthy();
  });
});
