import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GameState } from './game.state';

export const GAME__STATE__NAME = 'game';
export const getGameState = createFeatureSelector<GameState>(GAME__STATE__NAME);

export const getGameStore = createSelector(getGameState, (state) => {
  return state.gameStore;
});

export const getComputer = createSelector(getGameState, (state) => {
  return state.computer.image;
});

export const getMessage = createSelector(getGameState, (state) => {
  return state.message;
});

export const getNumOfTime = createSelector(getGameState, (state) => {
  return state.numOfTime;
});

export const getNumOfWins = createSelector(getGameState, (state) => {
  return state.numOfWins;
});
