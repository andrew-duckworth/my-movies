// import type { ThunkAction } from '../store'
// import { MoviesData, RawMovieDataArr } from '../models/Movies'

// import { getMoviesApi } from '../apis/apiClient'

// export const REQUEST_MOVIES = 'REQUEST_MOVIES'
// export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'
// export const SHOW_ERROR = 'SHOW_ERROR'

// export type Action =
//   | { type: typeof REQUEST_MOVIES; payload: null }
//   | { type: typeof RECEIVE_MOVIES; payload: MoviesData[] }
//   | { type: typeof SHOW_ERROR; payload: string }

// export function requestMovies(): Action {
//   return {
//     type: REQUEST_MOVIES,
//     payload: null,
//   }
// }

// export function receiveMovies(movies: RawMovieDataArr): Action {
//   return {
//     type: RECEIVE_MOVIES,
//     payload: movies.map((movie) => movie.data),
//   }
// }

// export function showError(errorMessage: string): Action {
//   return {
//     type: SHOW_ERROR,
//     payload: errorMessage,
//   }
// }

// export function fetchMovies(movies: string): ThunkAction {
//   return (dispatch) => {
//     dispatch(requestMovies())
//     return getMoviesApi()
//       .then((posts) => {
//         dispatch(receiveMovies(movies))
//       })
//       .catch((err) => {
//         dispatch(showError(err.message))
//       })
//   }
// }

import type { ThunkAction } from '../store'
import { MoviesData, RawMovieDataArr } from '../models/Movies'

import { getMoviesApi } from '../apis/apiClient'

export const REQUEST_MOVIES = 'REQUEST_MOVIES'
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'
export const SHOW_ERROR = 'SHOW_ERROR'

export type Action =
  | { type: typeof REQUEST_MOVIES; payload: null }
  | { type: typeof RECEIVE_MOVIES; payload: MoviesData[] }
  | { type: typeof SHOW_ERROR; payload: string }

export function requestMovies(): Action {
  return {
    type: REQUEST_MOVIES,
    payload: null,
  }
}

export function receiveMovies(movies: MoviesData[]): Action {
  return {
    type: RECEIVE_MOVIES,
    payload: movies,
  }
}

export function showError(errorMessage: string): Action {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}

export function fetchMovies(movies: string): ThunkAction<void> {
  return (dispatch) => {
    dispatch(requestMovies())
    return getMoviesApi(movies)
      .then((rawMovies: RawMovieDataArr[]) => {
        const movies = rawMovies.map((movie) => movie.data) // extract the data property from each object
        dispatch(receiveMovies(movies))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
