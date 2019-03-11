import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import { QueryType } from "src/app/_interfaces/QueryType";
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class PostsListGQLService extends Query<QueryType>{

  document = gql`
    query getAllPosts {
      getAllPosts {
        title
        description
        createdAt
      }
    }
  `;

}
