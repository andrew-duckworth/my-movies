import { Starsign, BigThree, BigThreeData } from '../../common/Starsign'
import { addAUser, grabSigns, grabUsers } from '../apis/starsigns'
import type { ThunkAction } from '../store'

export const RECEIVE_SIGNS = 'RECEIVE_SIGNS'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_ONE_USER = 'ADD_ONE_USER'

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

export function addOneUser(user: BigThree) {
  return {
    type: ADD_ONE_USER,
    payload: user,
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

export function addOneUserThunk(newUser: BigThreeData): ThunkAction {
  return (dispatch) => {
    return addAUser(newUser)
      .then((user) => {
        dispatch(addOneUser(user))
      })
      .catch((err) => console.log(err.message))
  }
}
