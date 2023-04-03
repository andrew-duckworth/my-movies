import { ThunkAction } from '../store'
import type { Movie } from '../../common/types'
import { fetchMovies } from '../apis/movie'

export const SHOW_MOVIES = 'SHOW_MOVIES'

// Simple Actions

export function getMoviesAction(movies: Movie[]) {
  return {
    type: SHOW_MOVIES,
    payload: movies,
  }
}

// Thuncctions

export function getMoviesThunk(): ThunkAction {
  return (dispatch) => {
    return fetchMovies() // get data form API
      .then((movies) => {
        // take the data from the API/our database
        dispatch(getMoviesAction(movies)) // dispatch the simple action
        // with the movie array as the payload
      })
      .catch((err) => console.log(err.message))
  }
}
