export type ImdbAction = { type: string, payload: ImdbMovie}
import { ImdbMovie } from '../../common/types'
import { IMDB_DATA } from '../actions/imdb'

const initialState = [] as ImdbMovie[]

export default function imdbReducer(state = initialState, action: ImdbAction) {
  const {type, payload} = action
  switch(type) {
    case IMDB_DATA:
      return payload

    default:
      return state
  }
}

