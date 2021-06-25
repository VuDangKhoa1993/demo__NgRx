import { gameReducer } from '../game/state/game.reducer';
import { GameState } from '../game/state/game.state';
import { postReducer } from '../posts/state/post.reducer';
import { PostState } from '../posts/state/post.state';

export interface AppState {
  game: GameState;
  posts: PostState;
}

export const AppReducer = {
  game: gameReducer,
  posts: postReducer,
};
