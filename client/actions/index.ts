import { ThunkAction } from '../store'
import { Joke, UserJoke } from '../../common/models'
import { fetchJokes, sendNewJoke } from '../apis/jokeApi'

export function receiveJokes(jokes: Joke[]): JokeAction {
  return { type: 'RECEIVE_JOKES', payload: jokes }
}

export function addJoke(joke: Joke): JokeAction {
  return { type: 'ADD_JOKE', payload: joke }
}

export function getJokes(): ThunkAction {
  return async (dispatch) => {
    fetchJokes()
      .then((jokes) => dispatch(receiveJokes(jokes)))
      .catch((err) => console.log(err.message))
  }
}

export function addNewJoke(joke: UserJoke): ThunkAction {
  return async (dispatch) => {
    sendNewJoke(joke)
      .then((joke) => dispatch(addJoke(joke)))
      .catch((err) => console.log(err.message))
  }
}

export type JokeAction =
  | {
      type: 'RECEIVE_JOKES'
      payload: Joke[]
    }
  | { type: 'ADD_JOKE'; payload: Joke }
