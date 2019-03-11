import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreatePostGqlService } from 'src/app/services/create-post-gql.service';
import { Router } from '@angular/router';
import { getAllPosts } from 'src/app/graphql/query'


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.less']
})
export class CreatePostComponent implements OnInit {

  createForm: FormGroup;

  constructor(private fb: FormBuilder, 
    private createPostGQL: CreatePostGqlService, 
    private router: Router,) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      title: ['', [
        Validators.required,
      ]],
      description: ['', [
        Validators.required,
      ]]
    })
  }

  get title() {
    return this.createForm.get('title');
  }

  get description() {
    return this.createForm.get('description');
  }

  create() {
    this.createPostGQL
      .mutate({
        title: this.title.value,
        description: this.description.value,
        createdAt: "2018-01-01",
      },
      {
        refetchQueries: [{
          query: getAllPosts
        }]
      })
      .subscribe();
    this.router.navigate(['/home']);
  }

}
