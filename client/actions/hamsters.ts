import type { ThunkAction } from '../store'
import { Hamsters } from '../../models/hamster'

import { fetchHamsters, updateHammies } from '../apis/hammies'
// import updateHammies from '../apis/updHammies'

export const RECEIVE_HAMSTERS = 'RECEIEVE_HAMSTERS'
export const SHOW_ERROR = 'SHOW_ERROR'
export const REQUEST_HAMSTERS = 'REQUEST_HAMSTERS'
export const UPDATE_HAMSTERS = 'UPDATE_HAMSTERS'

export type Action =
  | { type: typeof RECEIVE_HAMSTERS; payload: Hamsters[] }
  | { type: typeof SHOW_ERROR; payload: string }
  | { type: typeof REQUEST_HAMSTERS; payload: null }
  | { type: typeof UPDATE_HAMSTERS; payload: { old: string; new: string } }

export function receiveHamsters(hamsters: Hamsters[]): Action {
  return {
    type: RECEIVE_HAMSTERS,
    payload: hamsters,
  }
}

export function showError(errorMessage: string): Action {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}

export function requestHamsters(): Action {
  return {
    type: REQUEST_HAMSTERS,
    payload: null,
  }
}

export function updateHamsters(data): Action {
  return {
    type: 'UPDATE_HAMSTERS',
    payload: data,
  }
}
// export function runUpdateHamsters(id: number, newName: string) {
//   console.log('action:', id, newName)
//   updateHammies(id, newName)
// }

export function runUpdateHamsters(
  oldName: string,
  newName: string,
  hammyId: number
): ThunkAction {
  return (dispatch) => {
    return updateHammies(hammyId, newName)
      .then((data) => {
        // console.log(data)
        // dispatch(updateHamsters(data))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export function fetchAllHamsters(): ThunkAction {
  return (dispatch) => {
    dispatch(requestHamsters())
    return fetchHamsters()
      .then((hamsters: []) => {
        dispatch(receiveHamsters(hamsters))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
