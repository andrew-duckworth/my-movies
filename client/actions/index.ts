import { ThunkAction } from '../store'
import { Joke } from '../../common/models'
import { fetchJokes } from '../apis/jokeApi'

export function receiveJokes(jokes: Joke[]): JokeAction {
  return { type: 'RECEIVE_JOKES', payload: jokes }
}

export function getJokesFromAPI(): ThunkAction {
  return async (dispatch) => {
    fetchJokes()
      .then((jokes) => dispatch(receiveJokes(jokes)))
      .catch((err) => console.log(err.message))
  }
}

export interface JokeAction {
  type: 'RECEIVE_JOKES'
  payload: Joke[]
}
