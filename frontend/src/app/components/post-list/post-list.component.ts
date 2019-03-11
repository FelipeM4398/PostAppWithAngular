import { Component, OnInit, Injectable } from '@angular/core';
import { Post } from 'src/app/_interfaces/post';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostsListGQLService } from 'src/app/services/posts-list-gql.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.less']
})
export class PostListComponent implements OnInit {

  postsList: Observable<Post[]>;
  constructor(private postListGQL: PostsListGQLService) { 
  }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts(){
    this.postsList = this.postListGQL
      .watch().valueChanges
      .pipe(
        map(result => result.data.getAllPosts)
      );
  }
}
