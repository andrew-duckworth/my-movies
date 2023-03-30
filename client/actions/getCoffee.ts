import type { ThunkAction } from '../store'
import { CoffeeData } from '../models/Coffee'

import { getAllCoffee } from '../apiClient'

export const REQUEST_COFFEE = 'REQUEST_MOVIES'
export const RECEIVE_COFFEE = 'RECEIVE_MOVIES'
export const SHOW_ERROR = 'SHOW_ERROR'

export type Action =
  | { type: typeof REQUEST_COFFEE; payload: null }
  | { type: typeof RECEIVE_COFFEE; payload: CoffeeData[] }
  | { type: typeof SHOW_ERROR; payload: string }

export function requestCoffee(): Action {
  return {
    type: REQUEST_COFFEE,
    payload: null,
  }
}

export function receiveCoffee(coffee: CoffeeData[]): Action {
  return {
    type: RECEIVE_COFFEE,
    payload: coffee,
  }
}

export function showError(errorMessage: string): Action {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}

export function fetchCoffee(): ThunkAction {
  return (dispatch) => {
    dispatch(requestCoffee())
    return getAllCoffee()
      .then((coffee) => {
        dispatch(receiveCoffee(coffee))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
