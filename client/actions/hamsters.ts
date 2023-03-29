import type { ThunkAction } from '../store'
import { Hamsters } from '../../models/hamster'

import fetchHamsters from '../apis/hammies'
import updateHammies from '../apis/hammies'

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

export function runUpdateHamsters(
  oldName: string,
  newName: string
): ThunkAction {
  return (dispatch) => {
    dispatch(requestHamsters())
    return updateHamsters(oldName, newName)
      .then((data) => {
        dispatch(updateHammies(data))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export function updateHamsters(oldName: string, newName: string): Action {
  return {
    type: 'UPDATE_HAMSTERS',
    payload: { old: oldName, new: newName },
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
