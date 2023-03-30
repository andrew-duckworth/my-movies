import type { ThunkAction } from '../store' // For TS type
import {
  MusicFestivalDetails,
  MusicFestivalData,
} from '../../common/musicFestivalsTypes'
import { fetchFest } from '../apis/musicFestivalsApi'

export const REQUEST_FESTS = 'REQUEST_FEST'
export const RECEIVE_FESTS = 'RECEIVE_FEST'

// Action types
export type FestAction =
  | { type: typeof REQUEST_FESTS; payload: null }
  | { type: typeof RECEIVE_FESTS; payload: MusicFestivalDetails }

// Action creators
export function requestMusicFests(): FestAction {
  console.log('3: Action - request quote: ')

  return {
    type: REQUEST_FESTS,
    payload: null,
  }
}

export function receiveMusicFests(fests: MusicFestivalData): FestAction {
  console.log('9: Action - receive quote: ', fests)

  return {
    type: RECEIVE_FESTS,
    payload: fests,
  }
}

// NEW: This is a thunk action
export function fetchMusicFests(): ThunkAction {
  console.log('2: In Thunk')

  return (dispatch) => {
    dispatch(requestMusicFests()) //first dispatch
    return fetchFest() // calling API here
      .then((data) => {
        console.log('8: Thunk - fetched quote: ', data)

        // Thunk allows us to delay dispatching receiveQuote action
        dispatch(receiveMusicFests(data)) // second dispatch
      })
      .catch((err) => {
        return err.message
      })
  }
}
