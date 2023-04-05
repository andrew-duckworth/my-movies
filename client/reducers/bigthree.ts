export type UserAction = { type: string; payload: BigThree }
import { ADD_ONE_USER, RECEIVE_USERS } from '../actions/zodiac'
import { BigThree } from '../../common/Starsign'

const initialState = [] as BigThree[]

export default function bigthree(state = initialState, action: UserAction) {
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
