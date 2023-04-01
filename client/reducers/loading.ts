import { Action } from '../actions/Actions'

function loading(state = false, action: Action) {
  const { type } = action

  switch (type) {
    case 'LOADING_BOOKS':
      return true
    case 'GOT_BOOKS':
      return false
    default:
      return state
  }
}

export default loading
