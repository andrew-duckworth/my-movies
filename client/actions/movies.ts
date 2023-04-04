import { ThunkAction } from '../store'
import type { Movie } from '../../common/types'
import { fetchMovies } from '../apis/movies'

export const SHOW_MOVIES = 'SHOW_MOVIES'

// Simple Actions

export function getMoviesAction(movies: Movie[]) {
  return {
    type: SHOW_MOVIES,
    payload: movies
  }
}

// Thuncctions
export function getMoviesThunk(): ThunkAction {
  return (dispatch) => {
    return fetchMovies()
      .then(movies => {
        dispatch(getMoviesAction(movies))
      })
      .catch(err => console.log(err.message))
  }
}