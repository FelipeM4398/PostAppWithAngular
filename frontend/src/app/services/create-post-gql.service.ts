import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class CreatePostGqlService extends Mutation{

  document = gql`
    mutation createPost($title: String!, $description: String, $createdAt: String ) {
      createPost(title: $title, description: $description, createdAt: $createdAt) {
        title
        description
        createdAt
      }
    }
  `;
}
