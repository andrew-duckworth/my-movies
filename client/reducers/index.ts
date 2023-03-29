import { combineReducers } from 'redux'

import musicFestivalReducer from './musicFestivalsRdcr'
// import stuff from './stuff'

const allReducers = combineReducers({
  musicFestRdcrs: musicFestivalReducer,
})

export default allReducers
