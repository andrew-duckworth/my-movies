import { BigThree, RawStarSignArr, Starsign } from '../../common/Starsign'
import { grabSigns } from '../apis/starsigns'
import type { ThunkAction } from '../store'

export const REQUEST_SIGNS = 'REQUEST_SIGNS'
export const RECEIVE_SIGNS = 'RECEIVE_SIGNS'
export const SHOW_ERROR = 'SHOW_ERROR'
export const ADD_SIGNS = 'ADD_SIGNS'

export type Action =
  | { type: typeof REQUEST_SIGNS; payload: null }
  | { type: typeof RECEIVE_SIGNS; payload: Starsign[] }
  | { type: typeof SHOW_ERROR; payload: string }
  | { type: typeof ADD_SIGNS; payload: BigThree[] }

export function requestSigns(): Action {
  return {
    type: REQUEST_SIGNS,
    payload: null,
  }
}

export function receiveSigns(signs: RawStarSignArr): Action {
  return {
    type: RECEIVE_SIGNS,
    payload: signs.map((sign) => sign.data),
  }
}

export function showError(errorMessage: string): Action {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}

export function addSigns(): Action {
  return {
    type: ADD_SIGNS,
    payload: 
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
