import { Post } from 'src/app/models/post.model';

export interface PostState {
  posts: Post[];
}

export const inititalState: PostState = {
  posts: localStorage.getItem('localPostsList')
    ? JSON.parse(localStorage.getItem('localPostsList') || '[]')
    : [
        { id: '1', title: 'Same Title 1', description: 'Same Description 1' },
        { id: '2', title: 'Same Title 2', description: 'Same Description 2' },
      ],
};
