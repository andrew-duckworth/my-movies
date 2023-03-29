import { combineReducers } from 'redux'

import teams from './teams'
import waiting from './waiting'

// import stuff from './stuff'

export default combineReducers({
  teams,
  waiting,
})
