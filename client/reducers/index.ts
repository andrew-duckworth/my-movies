import { combineReducers } from 'redux'
import Bookreducer from './bookReducer'

export default combineReducers({
  books: Bookreducer,
})
