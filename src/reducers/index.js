import { combineReducers } from 'redux';
import { cardReducer } from './card';
import { gameReducer } from './game';

export const rootReducer = combineReducers({
  card: cardReducer,
  game: gameReducer,
});
