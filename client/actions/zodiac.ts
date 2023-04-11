import * as Models from '../../common/Starsign'
import {
  addAUser,
  deleteAUser,
  grabSigns,
  grabUsers,
  updateAUser,
} from '../apis/starsigns'
import type { ThunkAction } from '../store'

export const RECEIVE_SIGNS = 'RECEIVE_SIGNS'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_ONE_USER = 'ADD_ONE_USER'
export const DEL_ONE_USER = 'DEL_ONE_USER'
export const UPD_ONE_USER = 'UPD_ONE_USER'
export const RECEIVE_CHART = 'RECEIVE_CHART'

export type UserAction =
  | { type: typeof RECEIVE_SIGNS; payload: Models.Starsign[] }
  | { type: typeof RECEIVE_USERS; payload: Models.UserChart[] }
  | { type: typeof ADD_ONE_USER; payload: Models.UserChart }
  | { type: typeof DEL_ONE_USER; payload: number }
  | { type: typeof UPD_ONE_USER; payload: Models.UserChart }

// Simple Actions

export function getSignsAction(signs: Models.Starsign[]): UserAction {
  return {
    type: RECEIVE_SIGNS,
    payload: signs,
  }
}

export function getUsersAction(users: Models.UserChart[]): UserAction {
  return {
    type: RECEIVE_USERS,
    payload: users,
  }
}

export function addOneUser(user: Models.UserChart): UserAction {
  return {
    type: ADD_ONE_USER,
    payload: user,
  }
}

export function delOneUser(id: number): UserAction {
  return {
    type: DEL_ONE_USER,
    payload: id,
  }
}

export function updOneUser(user: Models.UserChart): UserAction {
  return {
    type: UPD_ONE_USER,
    payload: user,
  }
}

// Thunk Actions

export function getSignsThunk(): ThunkAction {
  return async (dispatch) => {
    grabSigns()
      .then((signs) => {
        dispatch(getSignsAction(signs))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}

export function getUsersThunk(): ThunkAction {
  return async (dispatch) => {
    grabUsers()
      .then((users) => {
        dispatch(getUsersAction(users))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}

export function addOneUserThunk(newUser: Models.UserChartData): ThunkAction {
  return async (dispatch) => {
    addAUser(newUser)
      .then((user) => {
        dispatch(addOneUser(user))
      })
      .catch((err) => console.log(err.message))
  }
}

export function delOneUserThunk(id: number): ThunkAction {
  return async (dispatch) => {
    deleteAUser(id)
      .then(() => {
        dispatch(delOneUser(id))
      })
      .catch((err) => console.log(err.message))
  }
}

export function updOneUserThunk(user: Models.UserChart): ThunkAction {
  return async (dispatch) => {
    updateAUser(user)
      .then(() => {
        dispatch(updOneUser(user))
      })
      .catch((err) => console.log(err.message))
  }
}
