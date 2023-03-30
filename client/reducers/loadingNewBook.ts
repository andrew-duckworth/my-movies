import { BookAction } from '../actions/bookAction'

function loadingNewBook(state = false, action: BookAction) {
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
