import {
  SHOW_ERROR,
  REQUEST_TEAMS,
  RECEIVE_TEAMS,
  Action,
} from '../actions/teams'

function waiting(state = false, action: Action): boolean {
  const { type } = action

  switch (type) {
    case REQUEST_TEAMS:
      return true
    case RECEIVE_TEAMS:
      return false
    case SHOW_ERROR:
      return false
    default:
      return state
  }
}

export default waiting
