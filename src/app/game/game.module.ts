import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GameCenterComponent } from './game-center/game-center.component';
import { PersonComponent } from './person/person.component';
import { ResultComponent } from './result/result.component';
import { ComputerComponent } from './computer/computer.component';
import { StoreModule } from '@ngrx/store';
import { GAME__STATE__NAME } from './state/game.selector';
import { gameReducer } from './state/game.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const gameRoutes: Routes = [{ path: '', component: GameCenterComponent }];

@NgModule({
  declarations: [
    GameCenterComponent,
    PersonComponent,
    ResultComponent,
    ComputerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(gameRoutes),
    StoreModule.forFeature(GAME__STATE__NAME, gameReducer),
  ],
})
export class GameModule {}
