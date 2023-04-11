import { Action } from "../actions/movies"
import { Movie } from "../../common/types"

const initialState = [] as Movie[]

export default function moviesReducer(state = initialState, action: Action) {
  const {type, payload} = action
  
  switch(type) {
    case 'SHOW_MOVIES':
      return payload
    case 'SAVE_ONE_MOVIE':
      return [...state, payload]
    default:
      return state
  }
}