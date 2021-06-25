import { Game } from 'src/app/models/game.model';

export interface GameState {
  message: string;
  numOfWins: number;
  numOfTime: number;
  gameStore: Game[];
  computer: any;
}

export const iniitalState: GameState = {
  message: '',
  numOfWins: 0,
  numOfTime: 0,
  computer: {},
  gameStore: [
    { id: 'keo', image: '../../../assets/img/keo.png', bet: false },
    { id: 'bua', image: '../../../assets/img/bua.png', bet: false },
    { id: 'bao', image: '../../../assets/img/bao.png', bet: false },
  ],
};
