export type MovieAction = {type: string; payload: Movie}
import { Movie } from "../../common/types"
import { SHOW_MOVIES } from "../actions/movies";

const initialState = [] as Movie[]

export default function moviesReducer(state = initialState, action: MovieAction) {
  const {type, payload} = action
  switch(type) {
    case SHOW_MOVIES:
      return payload

    default:
      return state
    
  }
}

// export default moviesReducer