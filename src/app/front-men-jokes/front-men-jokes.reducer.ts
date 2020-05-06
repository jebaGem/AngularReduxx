import { IJokesState, initialJokesState } from './front-men-jokes.state';
import { FrontMenJokesActionTypeKeys } from './front-men-jokes.actions';
import { cloneDeep } from 'lodash';

  function storeJokesList(state: IJokesState,
    action): any {
    const clonedState = cloneDeep(state);
    const jokes = action.payload;
    clonedState.jokes = jokes;
    return clonedState;
  }
  function addFave(state, action): any {
const clonedState = cloneDeep(state);
const jokes = action.payload;
clonedState.fav.push(jokes);
return clonedState;
  }
  export function frontMenJokesReducer(
    state: IJokesState = initialJokesState,
    action) {
    switch (action.type) {
      // success action types
      case FrontMenJokesActionTypeKeys.GET_JOKES_SUCCESS:
        return storeJokesList(state, action);
        case FrontMenJokesActionTypeKeys.SET_favorite:
        return addFave(state, action);
      default:
        return state;
    }
  }
