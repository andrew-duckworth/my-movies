import {
  REQUEST_SCHEDULE,
  RECEIVE_SCHEDULE,
  ScheduleAction,
} from '../actions/Schedule'

function loading(state = false, action: ScheduleAction): boolean {
  const { type } = action

  switch (type) {
    case REQUEST_SCHEDULE:
      return true
    case RECEIVE_SCHEDULE:
      return false
    default:
      return state
  }
}

// NOTE: This is calling the same action as the Quote Action
// So we don't need a separate loading action file
// Just this reducer to set the 'loading' state boolean

export default loading
