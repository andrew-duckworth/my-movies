import { combineReducers } from 'redux'

import reducer from './musicFestivalsRdcr'
// import stuff from './stuff'

const allReducers = combineReducers({
  musicFestRdcrs: reducer,
})

export default allReducers
