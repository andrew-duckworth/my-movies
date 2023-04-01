import { Action } from '../actions/Actions'

function loadingNewBook(state = false, action: Action) {
  const { type } = action

  switch (type) {
    case 'LOADING_NEW_BOOK':
      return true
    case 'ADD_BOOK':
      return false
    default:
      return state
  }
}

export default loadingNewBook
