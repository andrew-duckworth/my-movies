import { combineReducers } from 'redux'
import lightModeReducer from './lightMode'
import oneSchedule from './schedulerreducer'
import loading from './loading'

// import stuff from './stuff'

const allReducers = combineReducers({
  lights: lightModeReducer,
  schedule: oneSchedule,
  loading: loading,
})

export default allReducers
