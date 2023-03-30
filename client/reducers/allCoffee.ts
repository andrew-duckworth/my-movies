import { Action, RECEIVE_COFFEE } from '../actions/getCoffee'
import { CoffeeData } from '../models/Coffee'

const initialState: CoffeeData[] = [
  { id: 99, name: 'Thebatman', url: 'lfdhsad', selftext: './random' },
]

function CoffeeItem(state = initialState, action: Action): CoffeeData[] {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_COFFEE:
      return payload
    default:
      return state
  }
}

export default CoffeeItem
