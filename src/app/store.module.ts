import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { createEpicMiddleware } from 'redux-observable';

import { RootEpics } from './root.epics';
import { rootReducer } from './root.reducer';
import { JokesEpic } from './front-men-jokes/front-men-jokes.epics';


@NgModule({
  imports: [NgReduxModule],
  providers: [
    RootEpics,
    JokesEpic
  ],
})
export class StoreModule {
  constructor(
    public store: NgRedux<{}>,
    private devTools: DevToolsExtension,
    private rootEpics: RootEpics,
  ) {
    store.configureStore(
      rootReducer,
      {},
      this.rootEpics.createEpics(),
      devTools.isEnabled() ? [devTools.enhancer()] : []);
  }
}
