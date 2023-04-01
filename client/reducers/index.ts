import { combineReducers } from 'redux'
import Bookreducer from './bookReducer'
import loading from './loading'
import loadingNewBook from './loadingNewBook'
import Gamereducer from './gameReducer'

export default combineReducers({
  books: Bookreducer,
  loading,
  loadingNewBook,
  games: Gamereducer,
})
