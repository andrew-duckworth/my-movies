import type { ThunkAction } from '../store'
import { Schedule, RawScheduleData } from '../../common/schedule'
import { fetchScheduler } from '../apis/apischedule'

export const REQUEST_SCHEDULE = 'REQUEST_SCHEDULE'
export const RECEIVE_SCHEDULE = 'RECEIVE_SCHEDULE'

//Action Types
export type ScheduleAction =
  | { type: typeof REQUEST_SCHEDULE; payload: null }
  | { type: typeof RECEIVE_SCHEDULE; payload: Schedule }

//Action Creators
export function requestSchedule(): ScheduleAction {
  return {
    type: REQUEST_SCHEDULE,
    payload: null,
  }
}

export function receiveSchedule(schedule: RawScheduleData): ScheduleAction {
  console.log('9: Action - receive schedule: ', schedule)

  return {
    type: RECEIVE_SCHEDULE,
    payload: schedule,
  }
}

export function fetchSchedule(): ThunkAction {
  console.log('2: Givin Up Da Thunk')

  return (dispatch) => {
    //first empty dispatch going up the chain requesting resource
    dispatch(requestSchedule()) //this calls da API :)
    return fetchScheduler()
      .then((oneSchedule) => {
        dispatch(receiveSchedule(oneSchedule)) // second dispatch back from the chain with resources requested from query
      })
      .catch((err: Error) => {
        return err.message
      })
  }
}
