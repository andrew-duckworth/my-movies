import { BookAction } from '../actions/bookAction'

function loading(state = false, action: BookAction) {
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
