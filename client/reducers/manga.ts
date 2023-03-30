import { Action } from '../actions/index'
import { RECEIVE_ALL_MANGA } from '../actions/manga'
import { Manga } from '../../common/manga'

const initialState: Manga[] = []

function mangaReducer(state = initialState, action: Action): Manga[] {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_ALL_MANGA:
      return payload
    default:
      return state
  }
}

export default mangaReducer
