import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';

export enum FrontMenJokesActionTypeKeys {
GET_JOKES = 'front_men_jokes/GET_JOKES',
SET_favorite = 'front_men_jokes/SET_FAVORITE',
REMOVE_FAVORITE = 'front_men_jokes/REMOVE_FAVORITE',
GET_JOKES_SUCCESS = 'front_men_jokes/GET_JOKES_SUCCESS',
GET_JOKES_FAILED = 'front_men_jokes/GET_JOKES_FAILED',
}

export interface JokesList {
    id: string;
    name: string;
    favorite: boolean;
}

export interface IGetJokesSuccess {
    type: FrontMenJokesActionTypeKeys.GET_JOKES_SUCCESS;
    payload: any;
  }

  export interface IGetJokesFailed {
    type: FrontMenJokesActionTypeKeys.GET_JOKES_FAILED;
  }

    export interface Value {
        id: number;
        joke: string;
        categories: string[];
    }

    export interface Jokes {
        type: string;
        value: Value[];
    }


    @Injectable()
    export class JokesActions {
        @dispatch()
  getJokes(number: string) {
    return {
      type: FrontMenJokesActionTypeKeys.GET_JOKES,
      payload: number
    };
  }

  @dispatch()
  addFav(value) {
      return {
          type: FrontMenJokesActionTypeKeys.SET_favorite,
          payload: value
      };
  }
    }
