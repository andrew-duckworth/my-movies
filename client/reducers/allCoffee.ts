import { Action, RECEIVE_COFFEE } from '../actions/getCoffee'
import { CoffeeData } from '../models/Coffee'

const initialState = [] as CoffeeData[]

export function coffeeReducer(
  state = initialState,
  action: Action
): CoffeeData[] {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_COFFEE:
      return payload
    default:
      return state
  }
}
