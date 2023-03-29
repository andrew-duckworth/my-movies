import type { ThunkAction } from '../store'
import { Schedule, RawScheduleData } from '../../common/schedule'

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

export function receiveSchedule(schedule: RawScheduleData) {
  console.log('9: Action - receive schedule: ', schedule)

  return {
    type: RECEIVE_SCHEDULE,
    payload: schedule,
  }
}

export function fetchSchedule(): ThunkAction {
  console.log('2: In Thunk')

  return (dispatch) => {}
}
