import { Action } from '../actions/index'
import { SHOW_ERROR } from '../actions/manga'

function errorMessage(state = '', action: Action): string {
  const { type } = action

  switch (type) {
    case SHOW_ERROR:
      return action.payload
    default:
      return state
  }
}

export default errorMessage
