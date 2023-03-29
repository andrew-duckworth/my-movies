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
    default:
      return state
  }
}
