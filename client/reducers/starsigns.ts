import { Action, RECEIVE_SIGNS, RECEIVE_USERS } from '../actions/zodiac'
import { BigThree, Starsign } from '../../common/Starsign'

const initialState1: Starsign[] = []
const initialState2: BigThree[] = []

export function starsigns(state = initialState1, action: Action): Starsign[] {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_SIGNS:
      return payload
    default:
      return state
  }
}

export function bigthree(state = initialState2, action: Action): BigThree[] {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_USERS:
      return payload
    default:
      return state
  }
}
