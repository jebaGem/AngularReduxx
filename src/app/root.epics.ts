import { JokesEpic } from './front-men-jokes/front-men-jokes.epics';
import { Injectable } from '@angular/core';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

@Injectable()
export class RootEpics {
  constructor(
    private initEpics: JokesEpic,
  ) { }

  createEpics() {
    const epics = combineEpics(
      this.initEpics.getJokes,
    );

    return [createEpicMiddleware(epics)];
  }
}
