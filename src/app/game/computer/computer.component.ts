import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getComputer } from '../state/game.selector';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.scss'],
})
export class ComputerComponent implements OnInit {
  computerImage!: string;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
        // async pipe ( | async ) should be used in this case. 
    this.store
      .select(getComputer)
      .subscribe((data) => (this.computerImage = data));
  }
}
