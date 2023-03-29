import { combineReducers } from 'redux'

import decks from './decks'
import error from './error'

export default combineReducers({
  decks,
  error,
})
