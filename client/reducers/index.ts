import { combineReducers } from 'redux'
import imdbReducer from './imdb'

import moviesReducer from './movies'

export default combineReducers({
  movie: moviesReducer,
  imdb: imdbReducer,
})
