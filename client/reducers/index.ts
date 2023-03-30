import { combineReducers } from 'redux'
import Bookreducer from './bookReducer'
import loading from './loading'
import loadingNewBook from './loadingNewBook'

export default combineReducers({
  books: Bookreducer,
  loading,
  loadingNewBook,
})
