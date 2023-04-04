import { combineReducers } from 'redux'

import moviesReducer from './movies'
import imdbReducer from './imdb'

export default combineReducers({
  movie: moviesReducer,
  imdb: imdbReducer
})
