export type MovieAction = { type: string; payload: Movie }

import { SHOW_MOVIES } from '../actions/movies'

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

    default:
      return state
  }
}
