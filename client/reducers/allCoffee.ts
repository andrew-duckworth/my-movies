import { CoffeeAction } from '../actions/getCoffee'
import { CoffeeData } from '../models/Coffee'

const initialState = [] as CoffeeData[]

export function coffeeReducer(
  state = initialState,
  action: CoffeeAction
): CoffeeData[] {
  const { type, payload } = action

  switch (type) {
    case 'SET_COFFEE':
      return payload
    default:
      return state
  }
}
