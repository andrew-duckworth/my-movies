export type UserAction = { type: string; payload: BigThree }
import { ADD_ONE_USER, RECEIVE_USERS, DEL_ONE_USER } from '../actions/zodiac'
import { BigThree } from '../../common/Starsign'

const initialState = [] as BigThree[]

export default function bigthree(state = initialState, action: UserAction) {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_USERS:
      return payload
    case ADD_ONE_USER:
      return [...state, payload]
    case DEL_ONE_USER:
      return state.filter((user) => user.id !== payload)
    default:
      return state
  }
}
