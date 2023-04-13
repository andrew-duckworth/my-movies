import type { ThunkAction } from '../store'
import { delMovie, getMovies } from '../apis/apiClient'
import { Movie } from '../models/movies'

export const DEL_MOVIE = 'DELETE_MOVIE'
export const GET_MOVIES = 'GET_MOVIES'

export type Action =
  | { type: typeof DEL_MOVIE; payload: number }
  | { type: typeof GET_MOVIES; payload: number }

export function getAllMovies(movies: Movie[]) {
  return {
    type: GET_MOVIES,
    payload: movies,
  }
}

export function deleteMovieAction(id: number): Action {
  return {
    type: DEL_MOVIE,
    payload: id,
  }
}

// Thunks //

export function getMoviesThunk(): ThunkAction {
  return (dispatch) => {
    return getMovies()
      .then((movies) => {
        dispatch(getAllMovies(movies))
      })
      .catch((err) => console.log(err.message))
  }
}

export function runDeleteMovie(id: number): ThunkAction {
  return (dispatch) => {
    return delMovie(id)
      .then(() => {
        // Dispatch a success action
        dispatch(deleteMovieAction(id))
      })
      .catch((error) => {
        // Handle any errors that occur during the API call
        console.error(error)
      })
  }
}
