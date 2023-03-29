import { combineReducers } from 'redux'
import Bookreducer from './bookReducer'
import loading from './loading'

export default combineReducers({
  books: Bookreducer,
  loading,
})
