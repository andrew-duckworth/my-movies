import { JokeAction } from '../actions/index'
import { Joke } from '../../common/models'

const initialState = [] as Joke[]

export function jokeReducer(
  state = initialState,
  { type, payload }: JokeAction
) {
  switch (type) {
    case 'RECEIVE_JOKES': {
      return payload
    }
    case 'ADD_JOKE': {
      return [...state, payload]
    }
    case 'DEL_JOKE': {
      return state.filter((joke) => joke.id !== payload)
    }
    default:
      return state
  }
}
