import { UserAction } from '../actions/zodiac'
import * as Models from '../../common/Starsign'

const initialState = [] as Models.BigThree[]

export default function bigthree(
  state = initialState,
  { type, payload }: UserAction
): Models.BigThree[] {
  switch (type) {
    case 'RECEIVE_USERS':
      return payload
    case 'ADD_ONE_USER':
      return [...state, payload]
    case 'DEL_ONE_USER':
      return state.filter((user) => user.id !== payload)
    default:
      return state
  }
}
