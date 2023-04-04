export type UserAction = { type: string; payload: BigThree }
import { RECEIVE_USERS, ADD_ONE_USER } from '../actions/zodiac'
import { BigThree } from '../../common/Starsign'

const initialState = [] as BigThree[]

export function bigthree(state = initialState, action: UserAction) {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_USERS:
      return payload
    case ADD_ONE_USER:
      return [...state, payload]
    default:
      return state
  }
}
