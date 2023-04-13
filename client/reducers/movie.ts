import { Action, DEL_MOVIE, GET_MOVIES } from '../actions/movies'
import { Movie } from '../models/movies'

export type MovieAction = { type: string; payload: Movie }

const initialState = [] as Movie[]

export function moobies(state = initialState, action: Action) {
  const { type, payload } = action

  switch (type) {
    case GET_MOVIES:
      return payload

    case DEL_MOVIE:
      return state.filter((movie) => movie.id !== payload)

    default:
      return state
  }
}
