export type UserAction = { type: string; payload: Starsign }
import { RECEIVE_SIGNS } from '../actions/zodiac'
import { Starsign } from '../../common/Starsign'

const initialState = [] as Starsign[]

export function starsigns(state = initialState, action: UserAction) {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_SIGNS:
      return payload
    default:
      return state
  }
}
