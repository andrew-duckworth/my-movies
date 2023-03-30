import { combineReducers } from 'redux'

import errorMessage from './errorMessage'
import mangaReducer from './manga'

export default combineReducers({
  errorMessage,
  mangaReducer,
})
