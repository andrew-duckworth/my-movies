import { Action, RECEIVE_SIGNS } from '../actions/zodiac'
import { Starsign } from '../../common/Starsign'

const initialState: Starsign[] = []

function starsigns(state = initialState, action: Action): Starsign[] {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_SIGNS:
      return payload
    default:
      return state
  }
}

export default starsigns
