import { Action } from '../actions/movies'
import { ImdbMovie } from '../../common/types'

const initialState = [] as ImdbMovie[]

export default function imdbReducer(state = initialState, action: Action) {
  const {type, payload} = action
  
  switch(type) {
    case 'IMDB_DATA':
      return payload
    default:
      return state
  }
}

