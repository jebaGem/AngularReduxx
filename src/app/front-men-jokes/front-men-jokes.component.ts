import { Component, OnInit } from '@angular/core';
import { JokesActions, Jokes } from './front-men-jokes.actions';
import { select, select$ } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { IRootState } from '../app.state';
import { assignIn } from 'lodash';
import { ValueTransformer } from '@angular/compiler/src/util';
export const getJokes =
  (jokes$: Observable<Jokes>): Observable<Jokes> =>
  jokes$.map((jokes) => {
    return jokes;
  } );

@Component({
  selector: 'app-front-men-jokes',
  templateUrl: './front-men-jokes.component.html',
  styleUrls: ['./front-men-jokes.component.scss']
})
export class FrontMenJokesComponent implements OnInit {
  @select$(['frontMenJokesReducer', 'jokes'], getJokes)
  jokes$: Observable<any>;
  @select((state) => state.frontMenJokesReducer.fav)
  fav$: Observable<any>;
  private jokesList;
  constructor(private _actions: JokesActions) {this._actions.getJokes('10');
 }

  ngOnInit() {
    this.fav$.subscribe((data) => {
      if (data) {
        this.jokesList = data;
      } else {
        this.jokes$.subscribe((dataInit) => {
        if (dataInit) {
          this.jokesList = dataInit;
        }
      });
    }
    });
  }
  addFav(value) {
  this._actions.addFav(value);
  }
}
