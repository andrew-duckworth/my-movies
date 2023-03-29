import { combineReducers } from 'redux'
import { jokeReducer } from './jokes'

// import stuff from './stuff'

export default combineReducers({
  jokes: jokeReducer,
})
