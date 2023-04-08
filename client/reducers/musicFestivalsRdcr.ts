import { FestAction, RECEIVE_FESTS, ADD_FEST } from '../actions/musicFestival'
import { MusicFestivalData } from '../../common/musicFestivalsTypes'

const initialState = [] as MusicFestivalData[]

function reducer(state = initialState, action: FestAction): object {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_FESTS:
      return payload
    case ADD_FEST:
      return [...state, payload]
    default:
      return state
  }
}

export default reducer
