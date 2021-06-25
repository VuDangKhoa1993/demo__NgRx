import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/post.model';
import { AppState } from 'src/app/store/app.state';
import { addPost } from '../state/post.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  addPostForm!: FormGroup;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.addPostForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  onAdd(): void {
    let { title, description } = this.addPostForm.value;
    let post: Post = {
      title,
      description,
    };

    this.store.dispatch(addPost({ post }));
  }

  showMessageErrorTitle() {
    let title = this.addPostForm.get('title');
    if (title?.touched && title?.invalid) {
      if (title?.errors?.required) {
        return 'Title is required';
      }

      if (title?.errors?.minlength) {
        return 'Title should be minimum 6 character';
      }
    }

    return null;
  }

  showMessageErrorDesc() {
    let desc = this.addPostForm.get('description');
    if (desc?.touched && desc?.invalid) {
      if (desc?.errors?.required) {
        return 'Description is required';
      }

      if (desc?.errors?.minlength) {
        return 'Description should be minimum 10 character';
      }
    }

    return null;
  }
}
