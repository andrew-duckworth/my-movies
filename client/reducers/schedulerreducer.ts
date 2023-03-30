import { ScheduleAction, RECEIVE_SCHEDULE } from '../actions/Schedule'
import { Schedule } from '../../common/schedule'

const initialState: Schedule = {
  id: 0,
  show_id: 0,
  host: '',
  day: '',
  time: '',
}

function oneSchedule(state = initialState, action: ScheduleAction): Schedule {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_SCHEDULE:
      return payload
    default:
      return state
  }
}

export default oneSchedule
