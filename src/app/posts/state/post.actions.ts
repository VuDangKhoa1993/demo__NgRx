import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/models/post.model';

export const ADD_POST = '[post page] add post';
export const UPDATE_POST = '[post page] update post';
export const DELETE_POST = '[post page] delete post';

export const addPost = createAction(ADD_POST, props<{ post: Post }>());
export const updatePost = createAction(UPDATE_POST, props<{ post: Post }>());
export const deletePost = createAction(
  DELETE_POST,
  props<{ id: string | undefined }>()
);
