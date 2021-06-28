import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Game } from 'src/app/models/game.model';
import { AppState } from 'src/app/store/app.state';
import { pickBet } from '../state/game.actions';
import { getGameStore } from '../state/game.selector';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
  gameStore!: Game[];
  pickImage!: string;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
        // async pipe ( | async ) should be used in this case. 
    this.store.select(getGameStore).subscribe((data) => {
      this.gameStore = data;
    });
  }

  pickBet(game: Game): void {
    this.store.dispatch(pickBet({ game }));
    this.pickImage = game.image;
  }
}
