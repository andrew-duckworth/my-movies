import { Action, ADD_HIKES, SAVE_HIKES } from '../actions/hikes'
import { HikesInterface } from '../../common/Hikes'

const initialState: HikesInterface[] = []

function subhikes(state = initialState, action: Action): HikesInterface[] {
  const { type, payload } = action

  switch (type) {
    case SAVE_HIKES:
      return payload
    default:
      return state
  }
}

export default subhikes
