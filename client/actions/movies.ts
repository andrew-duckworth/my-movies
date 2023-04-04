import type { ThunkAction } from '../store'
import { delMovie } from '../apis/apiClient'
import { type } from '../../server/public/bundle'

export const DEL_MOVIE = 'DELETE_MOVIE'

export type Action = { type: typeof DEL_MOVIE; payload: number }

export function deleteMovieAction(id: number): Action {
  return {
    type: DEL_MOVIE,
    payload: id,
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
