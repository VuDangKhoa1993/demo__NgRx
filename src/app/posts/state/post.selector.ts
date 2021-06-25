import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState } from './post.state';

export const POST__STATE__NAME = 'posts';

const getPostState = createFeatureSelector<PostState>(POST__STATE__NAME);

export const getPosts = createSelector(getPostState, (state) => {
  return state.posts;
});

export const getPostById = createSelector(
  getPostState,
  (state: PostState | undefined, props: any) => {
    return state?.posts.find((post) => post.id === props.id);
  }
);
