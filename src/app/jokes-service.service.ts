import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError, map, mergeMap, shareReplay, switchMap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { timer } from 'rxjs/observable/timer';
import { Jokes } from './front-men-jokes/front-men-jokes.actions';
import 'rxjs/add/operator/timeInterval';
@Injectable()
export class JokesServiceService {
  private _jokes: Jokes;
  private jokesCache$: Observable<Jokes>;
  private _header: { headers: HttpHeaders };
  private cache$: Observable<Array<Jokes>>;
private url = 'http://localhost:3000/getJokes/1';
  constructor(private _http: HttpClient) { }

  getjokes(numberOfJokes: number): Observable<any> {
     return this._http.get('http://localhost:3000/getJokes/' + numberOfJokes, this._header);
  }

  get jokes() {
    if (!this.cache$) {
      // Set up timer that ticks every X milliseconds
      const timer$ = timer(0, 5000);

      // For each tick make an http request to fetch new data
      this.cache$ = timer$.pipe(
        switchMap(_ => this.getMyJokes()),
        shareReplay(1)
      );
    }

    return this.cache$;
  }

  private getMyJokes() {
    return this._http.get<any>(this.url).pipe(
      map(response => response.value)
    );
  }
}
