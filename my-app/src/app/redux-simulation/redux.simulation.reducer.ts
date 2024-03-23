import { AppState } from './redux-simulation.state';
import { ReduxSimulationActions, ReduxSimulationActionTypes } from './redux-simulation.actions';

const initialState: AppState = {
  guessedNumber: null,
  successNumber: Math.floor(Math.random() * 10) + 1, 
  message: '',
};

export function reducer(state = initialState, action: ReduxSimulationActions): AppState {
  switch (action.type) {
    case ReduxSimulationActionTypes.GUESS_NUMBER_SUCCESS:
      const isCorrect = action.payload.guessedNumber === state.successNumber;
      return {
        ...state,
        guessedNumber: action.payload.guessedNumber,
        message: isCorrect ? 'Congratulations! You win a free photoshoot!' : 'Sorry, try again!',
      };

    default:
      return state;
  }
}
