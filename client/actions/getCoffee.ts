import type { ThunkAction } from '../store'
import { CoffeeData } from '../models/Coffee'

import { getAllCoffee } from '../apiClient'

export type Action =
  | { type: 'REQUEST_COFFEE'; payload: null }
  | { type: 'RECEIVE_COFFEE'; payload: CoffeeData[] }
  | { type: 'SHOW_ERROR'; payload: string }

export function requestCoffee(): Action {
  return {
    type: 'REQUEST_COFFEE',
    payload: null,
  }
}

export function receiveCoffee(coffee: CoffeeData[]): Action {
  return {
    type: 'RECEIVE_COFFEE',
    payload: coffee,
  }
}

export function showError(errorMessage: string): Action {
  return {
    type: 'SHOW_ERROR',
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
