import type { ThunkAction } from '../store'
import { MoviesData } from '../models/Movies'

import { getMoviesApi } from '../apis/apiClient'

export const REQUEST_MOVIES = 'REQUEST_MOVIES'
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'
export const SHOW_ERROR = 'SHOW_ERROR'
// export const UPDATE_MOVIES = 'UPDATE_MOVIES'
export const DELETE_MOVIES = 'DELETE_MOVIES'

//ACTION TYPES

export type Action =
  | { type: typeof REQUEST_MOVIES; payload: null }
  | { type: typeof RECEIVE_MOVIES; payload: MoviesData[] }
  | { type: typeof SHOW_ERROR; payload: string }
  | { type: typeof DELETE_MOVIES; payload: { id: string } }

// | {
//     type: typeof UPDATE_MOVIES
//     payload: {
//       oldTitle: string
//       newTitle: string
//       oldDirector: string
//       newDirector: string
//       oldImgUrl: string
//       newImgUrl: string
//     }
// }

//ACTION CREATORS

// export function updateMovies(
//   oldTitle: string,
//   newTitle: string,
//   oldDirector: string,
//   newDirector: string,
//   oldImgUrl: string,
//   newImgUrl: string
// ): Action {
//   return {
//     type: 'UPDATE_MOVIES',
//     payload: {
//       oldTitle: oldTitle,
//       newTitle: newTitle,
//       oldDirector: oldDirector,
//       newDirector: newDirector,
//       oldImgUrl: oldImgUrl,
//       newImgUrl: newImgUrl,
//     },
//   }
// }

export function removeMovie(id: string): Action {
  return {
    type: 'DELETE_MOVIES',
    payload: { id: id.toString() },
  }
}

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

export function fetchMovies(): ThunkAction {
  return (dispatch) => {
    dispatch(requestMovies())
    return getMoviesApi()
      .then((movies) => {
        dispatch(receiveMovies(movies))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
