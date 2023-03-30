import { Action, RECEIVE_MOVIES, DELETE_MOVIES } from '../actions/movie'
import { MoviesData } from '../models/Movies'

const initialState: MoviesData[] = [
  { id: 99, title: 'Thebatman', director: 'lfdhsad', movieImg: './random' },
]

function eachMovie(state = initialState, action: Action): MoviesData[] {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_MOVIES:
      return payload
    case DELETE_MOVIES:
      return state.filter((movie) => movie.id !== payload.id)
    default:
      return state
  }
}

export default eachMovie
