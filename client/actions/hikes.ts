import type { ThunkAction } from 'redux-thunk'
import { HikesInterface, RawHikesInterfaceArr } from '../../common/Hikes'

import { getAllHikes } from '../apis/apiClient'

export const SAVE_HIKES = 'SAVE_HIKES'
export const SHOW_ERROR = 'SHOW_ERROR'

export type Action =
  | { type: typeof SAVE_HIKES; payload: null }
  | { type: typeof SHOW_ERROR; payload: string }

// export function requestHikes(): Action {
//   return {
//     type: REQUEST_HIKES,
//     payload: null,
//   }
// }

export function saveHikes(hikes: RawHikesInterfaceArr): Action {
  return {
    type: SAVE_HIKES,
    payload: hikes.map((hike) => hike.data),
  }
}

export function showError(errorMessage: string): Action {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}

export function fetchHikes(subHikes: string): ThunkAction {
  return (dispatch) => {
    (getAllHikes(subHikes)
  .then((hikes) => {
    dispatch(saveHikes(hikes))
  })
  .catch((err) => {
    dispatchEvent(showError(err.message))
  })
  }
}

