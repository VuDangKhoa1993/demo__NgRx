import { Action, createReducer, on } from '@ngrx/store';
import { addPost, deletePost, updatePost } from './post.actions';
import { inititalState, PostState } from './post.state';

const _postReducer = createReducer(
  inititalState,

  on(addPost, (state, action) => {
    let post = { ...action.post };
    post.id = (state.posts.length + 1).toString();

    let updatePost = state.posts.filter((p) => p.title === post.title);

    if (updatePost.length > 0) {
      alert('Title already exist!!!');
      return { ...state };
    } else {
      [...state.posts, post];
    }

    localStorage.setItem(
      'localPostsList',
      JSON.stringify([...state.posts, post])
    );

    return {
      ...state,
      posts: [...state.posts, post],
    };
  }),

  on(updatePost, (state, action) => {
    let postUpdate = state.posts.map((post) => {
      return post.id === action.post.id ? action.post : post;
    });
    let checkTitleExist = state.posts.filter(
      (p) => p.title === action.post.title
    );

    if (checkTitleExist.length > 0) {
      alert('Title already exist!!!');
      return { ...state };
    } else {
      postUpdate;
    }

    localStorage.setItem('localPostsList', JSON.stringify(postUpdate));

    return {
      ...state,
      posts: postUpdate,
    };
  }),

  on(deletePost, (state, { id }) => {
    let updatePost = state.posts.filter((post) => post.id !== id);

    localStorage.setItem('localPostsList', JSON.stringify(updatePost));
    return {
      ...state,
      posts: updatePost,
    };
  })
);

export const postReducer = (state: PostState | undefined, action: Action) => {
  return _postReducer(state, action);
};
