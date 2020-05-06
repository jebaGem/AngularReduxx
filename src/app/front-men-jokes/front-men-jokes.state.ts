

export interface IValue {
    id: string;
    joke: string;
    fav: boolean;
}
export interface IJokesState {
  // todo: rename to signatoriesState
 jokes: IValue[];
 fav: null;
}

export const initialJokesState: IJokesState = {
   jokes : null,
   fav: null
};



