import { Movie } from '../../common/types'
import { SHOW_MOVIES } from '../actions/movies'
import { SAVE_MOVIE } from '../actions/imdb'

export type MovieAction = { type: string; payload: Movie }

const initialState = [] as Movie[]

export default function moviesReducer(
  state = initialState,
  action: MovieAction
) {
  const { type, payload } = action
  switch (type) {
    case SHOW_MOVIES:
      return payload

    case SAVE_MOVIE:
      return [...state, payload]

    default:
      return state
  }
}
