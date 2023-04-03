import { combineReducers } from 'redux'

// import stuff from './stuff'
import moviesReducer from './movies'

export default combineReducers({
  movies: moviesReducer,
})
