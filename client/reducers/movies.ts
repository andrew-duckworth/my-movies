export type MovieAction = {type: string; payload: Movie}
import { Movie } from "../../common/types"
import { SHOW_MOVIES } from "../actions/movies";
import { SAVE_ONE_MOVIE } from "../actions/imdb";

const initialState = [] as Movie[]

export default function moviesReducer(state = initialState, action: MovieAction) {
  const {type, payload} = action
  switch(type) {
    
    case SHOW_MOVIES:
      return payload

    case SAVE_ONE_MOVIE:
      return [...state, payload]

      default:
      return state
    
  }
}