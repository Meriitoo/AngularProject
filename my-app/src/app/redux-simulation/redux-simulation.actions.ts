import { Action } from '@ngrx/store';

export enum ReduxSimulationActionTypes {
  GUESS_NUMBER = '[Redux Simulation] Guess Number',
  GUESS_NUMBER_SUCCESS = '[Redux Simulation] Guess Number Success',
}

export class GuessNumber implements Action {
  readonly type = ReduxSimulationActionTypes.GUESS_NUMBER;
}

export class GuessNumberSuccess implements Action {
  readonly type = ReduxSimulationActionTypes.GUESS_NUMBER_SUCCESS;
  constructor(public payload: { guessedNumber: number }) {}
}

export type ReduxSimulationActions = GuessNumber | GuessNumberSuccess;
