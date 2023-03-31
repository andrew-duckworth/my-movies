import type { ThunkAction } from '../store'
import { CoffeeData } from '../models/Coffee'

import {
  getAllCoffee,
  addCoffee,
  updateCoffee,
  deleteCoffee,
} from '../apiClient'

export type CoffeeAction =
  | { type: 'ADD_COFFEE'; payload: CoffeeData }
  | { type: 'SET_COFFEE'; payload: CoffeeData[] }
  | { type: 'UPDATE_COFFEE'; payload: CoffeeData }
  | { type: 'DELETE_COFFEE'; payload: number }
  | { type: 'SHOW_ERROR'; payload: string }

export function requestCoffee(newCoffee: CoffeeData): CoffeeAction {
  return {
    type: 'ADD_COFFEE',
    payload: newCoffee,
  }
}

export function receiveCoffee(coffee: CoffeeData[]): CoffeeAction {
  return {
    type: 'SET_COFFEE',
    payload: coffee,
  }
}

export function deleteCoffeeItem(deleteId: number): CoffeeAction {
  return {
    type: 'DELETE_COFFEE',
    payload: deleteId,
  }
}

export function updateCoffeeItem(updateData: CoffeeData): CoffeeAction {
  return {
    type: 'UPDATE_COFFEE',
    payload: updateData,
  }
}

export function showError(errorMessage: string): CoffeeAction {
  return {
    type: 'SHOW_ERROR',
    payload: errorMessage,
  }
}

// Fetching to Database

export function fetchSetCoffee(): ThunkAction {
  return (dispatch) => {
    return getAllCoffee()
      .then((coffee) => {
        dispatch(receiveCoffee(coffee))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
