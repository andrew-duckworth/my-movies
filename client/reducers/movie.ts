import { Action, DEL_MOVIE } from '../actions/movies'
import { Movie } from '../models/movies'

const initialState: Movie[] = [
  {
    id: 1,
    title: 'dune',
    cover: './images/Dune',
    director: 'Denis',
  },
]

export function moobies(state = initialState, action: Action): Movie[] {
  const { type, payload } = action

  switch (type) {
    case DEL_MOVIE:
      return state.filter((movies) => {
        movies.id !== payload
      })
    default:
      return state
  }
}
