import * as Models from '../../common/Starsign'
import { grabSigns, grabUsers } from '../apis/starsigns'
import type { ThunkAction } from '../store'

export const REQUEST_SIGNS = 'REQUEST_SIGNS'
export const RECEIVE_SIGNS = 'RECEIVE_SIGNS'
export const SHOW_ERROR = 'SHOW_ERROR'
export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'

export type Action =
  | { type: typeof REQUEST_SIGNS; payload: null }
  | { type: typeof RECEIVE_SIGNS; payload: Models.Starsign[] }
  | { type: typeof SHOW_ERROR; payload: string }
  | { type: typeof REQUEST_USERS; payload: null }
  | { type: typeof RECEIVE_USERS; payload: Models.BigThree[] }

export function requestSigns(): Action {
  return {
    type: REQUEST_SIGNS,
    payload: null,
  }
}

export function receiveSigns(signs: Models.Starsign[]): Action {
  return {
    type: RECEIVE_SIGNS,
    payload: signs,
  }
}

export function showError(errorMessage: string): Action {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}

export function requestUsers(): Action {
  return {
    type: REQUEST_USERS,
    payload: null,
  }
}

export function receiveUsers(users: Models.RawBigThreeArr): Action {
  return {
    type: RECEIVE_USERS,
    payload: users.map((user) => user.data),
  }
}

export function fetchSigns(): ThunkAction {
  return (dispatch) => {
    dispatch(requestSigns())
    return grabSigns()
      .then((signs) => {
        dispatch(receiveSigns(signs))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export function fetchUsers(): ThunkAction {
  return (dispatch) => {
    dispatch(requestUsers())
    return grabUsers()
      .then((users) => {
        dispatch(receiveUsers(users))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
