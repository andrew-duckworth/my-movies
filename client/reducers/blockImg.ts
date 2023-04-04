import { CoffeeAction } from '../actions/getCoffee'

function blockImage(state = false, action: CoffeeAction): boolean {
  const { type } = action

  switch (type) {
    case 'ADD_COFFEE':
      return true
    case 'SET_COFFEE':
      return false
    default:
      return state
  }
}

export default blockImage
