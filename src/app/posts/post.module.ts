import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { StoreModule } from '@ngrx/store';
import { postReducer } from './state/post.reducer';
import { POST__STATE__NAME } from './state/post.selector';

const postRoutes: Routes = [
  {
    path: '',
    component: PostsListComponent,
    children: [
      { path: 'add', component: AddPostComponent },
      { path: 'edit/:id', component: EditPostComponent },
    ],
  },
];

@NgModule({
  declarations: [PostsListComponent, EditPostComponent, AddPostComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(POST__STATE__NAME, postReducer),
    RouterModule.forChild(postRoutes),
  ],
})
export class PostModule {}
