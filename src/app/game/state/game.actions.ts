import { createAction, props } from '@ngrx/store';
import { Game } from 'src/app/models/game.model';

export const PICK_BET = '[person pick] pick Bet';
export const PLAY_GAME = '[result play] play game';
export const RAND_DOM = '[result random] random';
export const END_GAME = '[result end] end game';

export const pickBet = createAction(PICK_BET, props<{ game: Game }>());

export const playGame = createAction(PLAY_GAME, props<{ game: Game }>());

export const random = createAction(RAND_DOM);
export const endGame = createAction(END_GAME);
