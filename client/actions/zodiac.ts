import { Starsign, BigThree } from '../../common/Starsign'
import { grabSigns, grabUsers } from '../apis/starsigns'
import type { ThunkAction } from '../store'

export const RECEIVE_SIGNS = 'RECEIVE_SIGNS'
export const RECEIVE_USERS = 'RECEIVE_USERS'

// Simple Actions

export function getSignsAction(signs: Starsign[]) {
  return {
    type: RECEIVE_SIGNS,
    payload: signs,
  }
}

export function getUsersAction(users: BigThree[]) {
  return {
    type: RECEIVE_USERS,
    payload: users,
  }
}

// Thunk Actions

export function getSignsThunk(): ThunkAction {
  return (dispatch) => {
    return grabSigns()
      .then((signs) => {
        dispatch(getSignsAction(signs))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}

export function getUsersThunk(): ThunkAction {
  return (dispatch) => {
    return grabUsers()
      .then((users) => {
        dispatch(getUsersAction(users))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}
