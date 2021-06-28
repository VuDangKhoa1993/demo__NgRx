import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, switchMap } from 'rxjs/operators';
import { Post } from 'src/app/models/post.model';
import { AppState } from 'src/app/store/app.state';
import { updatePost } from '../state/post.actions';
import { getPostById } from '../state/post.selector';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit {
  editPostForm!: FormGroup;
  post?: Post;
  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        filter((params) => !!params.get('id')),
        switchMap((params) => {
          const id = params.get('id')!;
          return this.store.select(getPostById, { id });
        })
      )
      .subscribe((data) => {
        this.post = data;
        this.createForm();
      });
    // Rxjs high order operators should be used instead of using nested subscribe because it is not good for performance web,
    // this.route.paramMap.subscribe((param) => {
    //   let id = param.get('id');

    //   this.store
    //     .select(getPostById, { id })
    //     .subscribe((data) => (this.post = data));

    //   this.createForm();
    // });
  }

  createForm(): void {
    this.editPostForm = new FormGroup({
      title: new FormControl(this.post?.title, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(this.post?.description, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  update(): void {
    let { title, description } = this.editPostForm.value;
    let post: Post = {
      id: this.post?.id,
      title,
      description,
    };

    this.store.dispatch(updatePost({ post }));
  }

  showMessageErrorTitle() {
    // doestn't call method directly inside of template because it can cause performance's issues during the change detection running.
    // in this case, we should define a specify variable (Ex: message) to obtain returned value from this method and then binding it to the template.
    let title = this.editPostForm.get('title');
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
    // same as above
    let desc = this.editPostForm.get('description');
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
