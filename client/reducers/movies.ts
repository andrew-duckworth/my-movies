export type MovieAction = { type: string; payload: Movie }
import { Movie } from '../../common/types'
import { SHOW_MOVIES } from '../actions/movies'
import { DEL_ONE_MOVIE, SAVE_ONE_MOVIE } from '../actions/imdb'

const initialState = [] as Movie[]

export default function moviesReducer(
  state = initialState,
  action: MovieAction
) {
  const { type, payload } = action
  switch (type) {
    case SHOW_MOVIES:
      return payload

    case SAVE_ONE_MOVIE:
      return [...state, payload]

    case DEL_ONE_MOVIE:
      return [...state].filter((movie) => movie.id !== action.payload)

    default:
      return state
  }
}
