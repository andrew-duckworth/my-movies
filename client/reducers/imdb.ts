import { Imdb } from '../../common/types'
import { IMDB_DATA } from '../actions/imdb'

export type ImdbAction = { type: string; payload: Imdb }

const initialState = [] as Imdb[]

export default function imdbReducer(state = initialState, action: ImdbAction) {
  const { type, payload } = action
  switch (type) {
    case IMDB_DATA:
      return payload

    default:
      return state
  }
}
