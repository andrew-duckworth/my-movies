import { combineReducers } from 'redux'

import moviesReducer from './movies'
import imdbReducer from './imdb'

// import stuff from './stuff'

export default combineReducers({
  moves: moviesReducer,
  imdb: imdbReducer,
})
