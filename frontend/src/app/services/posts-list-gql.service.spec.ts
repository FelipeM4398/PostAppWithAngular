import { TestBed } from '@angular/core/testing';

import { PostsListGQLService } from './posts-list-gql.service';

describe('PostsListGQLService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostsListGQLService = TestBed.get(PostsListGQLService);
    expect(service).toBeTruthy();
  });
});
