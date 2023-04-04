export type MovieAction = { type: string; payload: Movie }

import { SHOW_MOVIES } from '../actions/movies'

import { ADD_MOVIE } from '../actions/imdb'

import { Action } from 'redux'
import { Movie } from '../../common/types'

const initialState = [] as Movie[]

export default function moviesReducer(
  state = initialState,
  action: MovieAction
) {
  const { type, payload } = action

  switch (type) {
    case SHOW_MOVIES:
      return payload
    case ADD_MOVIE:
      return [...state, payload]

    default:
      return state
  }
}
