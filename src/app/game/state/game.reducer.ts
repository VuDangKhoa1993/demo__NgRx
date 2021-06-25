import { Action, createReducer, on, Store } from '@ngrx/store';
import { endGame, pickBet, playGame, random } from './game.actions';
import { GameState, iniitalState } from './game.state';

const _gameReducer = createReducer(
  iniitalState,
  on(pickBet, (state, action) => {
    let gameStoreUpdate = state.gameStore.map((game) => {
      if (game.id === action.game.id) {
        return { ...game, bet: true };
      }

      return { ...game, bet: false };
    });
    return {
      ...state,
      gameStore: gameStoreUpdate,
    };
  }),

  on(playGame, (state, action) => {
    console.log(action);
    return {
      ...state,
      gameStore: state.gameStore,
    };
  }),

  on(random, (state) => {
    let randomGameStore = Math.floor(Math.random() * state.gameStore.length);
    return {
      ...state,
      computer: state.gameStore[randomGameStore],
    };
  }),

  on(endGame, (state) => {
    let players = state.gameStore.find((item) => item.bet === true);
    let computers = state.computer;
    let showMessage = state.message;
    let timeWins = state.numOfWins;

    switch (players?.id) {
      case 'keo': {
        if (computers.id === 'keo') {
          showMessage = 'hòa rồi nhé!!!';
        } else if (computers.id === 'bua') {
          showMessage = 'thua sml!!!';
        } else {
          showMessage = "I'm Iron man. i love you 3000!!";
          timeWins++;
        }
        break;
      }

      case 'bua': {
        if (computers.id === 'keo') {
          showMessage = "I'm Iron man. i love you 3000!!";
          timeWins++;
        } else if (computers.id === 'bua') {
          showMessage = 'hòa rồi nhé!!!';
        } else {
          showMessage = 'thua sml!!!';
        }

        break;
      }

      case 'bao': {
        if (computers.id === 'keo') {
          showMessage = 'thua sml!!!';
        } else if (computers.id === 'bua') {
          showMessage = "I'm Iron man. i love you 3000!!";
          timeWins++;
        } else {
          showMessage = 'hòa rồi nhé!!!';
        }

        break;
      }

      default:
        showMessage = "I'm Iron man. i love you 3000!!";
        timeWins++;
        break;
    }

    return {
      ...state,
      numOfTime: state.numOfTime + 1,
      message: showMessage,
      numOfWins: timeWins,
    };
  })
);

export const gameReducer = (state: GameState | undefined, action: Action) => {
  return _gameReducer(state, action);
};
