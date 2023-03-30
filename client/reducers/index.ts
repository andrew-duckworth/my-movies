import { combineReducers } from 'redux'
import familyReducer from '../reducers/familyReducer'

// import stuff from './stuff'

export default combineReducers({
  // stuff
  family: familyReducer,
})
