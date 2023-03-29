import type { ThunkAction } from '../store'
import { HikesInterface } from '../../common/Hikes'

import { getAllHikes } from '../apis/apiClient'

export const SAVE_HIKES = 'SAVE_HIKES'
export const SHOW_ERROR = 'SHOW_ERROR'
export const ADD_HIKES = 'ADD_HIKES'

export type Action =
  | { type: typeof SAVE_HIKES; payload: HikesInterface[] }
  | { type: typeof ADD_HIKES; payload: string }
  | { type: typeof SHOW_ERROR; payload: string }

// export function requestHikes(): Action {
//   return {
//     type: REQUEST_HIKES,
//     payload: null,
//   }
// }

export function saveHikes(hikes: HikesInterface[]): Action {
  return {
    type: SAVE_HIKES,
    payload: hikes,
  }
}

export function showError(errorMessage: string): Action {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}

export function fetchHikes(): ThunkAction {
  return (dispatch) => {
    return getAllHikes()
      .then((hikes) => {
        console.log(hikes, 'Testing yayaaa')
        dispatch(saveHikes(hikes))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
