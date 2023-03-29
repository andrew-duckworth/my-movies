import { combineReducers } from 'redux'
import lightModeReducer from './lightMode'

// import stuff from './stuff'

const allReducers = combineReducers({
  lights: lightModeReducer,
})

export default allReducers
