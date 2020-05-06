import { combineReducers } from 'redux';
import { frontMenJokesReducer } from './front-men-jokes/front-men-jokes.reducer';

export const rootReducer = combineReducers({
    frontMenJokesReducer,
});
