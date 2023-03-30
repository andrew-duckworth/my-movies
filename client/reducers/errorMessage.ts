import { SHOW_ERROR, Action } from '../actions/getCoffee'
export function errorState(state = '', action: Action): string {
  const { type } = action

  switch (type) {
    case SHOW_ERROR:
      return action.payload
    default:
      return state
  }
}
