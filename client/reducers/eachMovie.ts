import { Action, RECEIVE_MOVIES } from '../actions/movie'
import { MoviesData } from '../models/Movies'

const initialState: MoviesData[] = []

function eachMovie(state = initialState, action: Action): MoviesData[] {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_MOVIES:
      return payload
    default:
      return state
  }
}

export default eachMovie
