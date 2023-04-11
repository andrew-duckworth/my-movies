import { UserAction } from '../actions/zodiac'
import * as Models from '../../common/Starsign'

const initialState = [] as Models.UserChart[]

export default function userchart(
  state = initialState,
  { type, payload }: UserAction
): Models.UserChart[] {
  switch (type) {
    case 'RECEIVE_USERS':
      return payload
    case 'ADD_ONE_USER':
      return [...state, payload]
    case 'DEL_ONE_USER':
      return state.filter((user) => user.id !== payload)
    case 'UPD_ONE_USER':
      return state.map((user) => {
        if (user.id === payload.id) {
          return { ...user, ...payload }
        }
        return user
      })
    default:
      return state
  }
}
