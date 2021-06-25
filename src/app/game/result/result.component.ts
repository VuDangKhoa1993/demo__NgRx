import { getMessage, getNumOfTime, getNumOfWins } from '../state/game.selector';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { endGame, playGame, random } from '../state/game.actions';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  message$!: Observable<string>;
  numOfTime$!: Observable<number>;
  numOfWins$!: Observable<number>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.message$ = this.store.select(getMessage);
    this.numOfTime$ = this.store.select(getNumOfTime);
    this.numOfWins$ = this.store.select(getNumOfWins);
  }

  playGame(): void {
    let count = 0;
    let randomComputerItem = setInterval(() => {
      this.store.dispatch(random());
      count++;
      if (count > 10) {
        this.store.dispatch(endGame());
        clearInterval(randomComputerItem);
      }
    }, 200);
  }
}
