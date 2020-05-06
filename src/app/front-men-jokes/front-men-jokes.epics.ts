import { Injectable } from '@angular/core';
import { JokesServiceService } from '../jokes-service.service';
import { Observable } from 'rxjs/Observable';
import { FrontMenJokesActionTypeKeys, IGetJokesSuccess, Jokes, IGetJokesFailed } from './front-men-jokes.actions';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import { isNil } from 'lodash';

@Injectable()
export class JokesEpic {
  constructor(private service: JokesServiceService) { }

  getJokes = (action$, store: any):
    Observable<any> => {
    return action$.ofType(FrontMenJokesActionTypeKeys.GET_JOKES)
      .filter(() => isNil(store.getState().frontMenJokesReducer.jokes))
      .mergeMap((action) => {
        const payload = action.payload;
        const jokesRequest = this.service.getjokes(payload);
        return jokesRequest.pipe(
          map(result => {
            const jokes: Jokes = result;
            return <IGetJokesSuccess>{
              type: FrontMenJokesActionTypeKeys.GET_JOKES_SUCCESS,
              payload: jokes.value
            };
          })
        ).catch(error => Observable.of<IGetJokesFailed>({
          type: FrontMenJokesActionTypeKeys.GET_JOKES_FAILED
        }));
      });
  }

}
