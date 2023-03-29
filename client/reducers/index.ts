import { combineReducers } from 'redux'
import hikes from './hikes'
// import stuff from './stuff'

export default combineReducers({
  // stuff
  hikes, //This matches with the hikes in the GloablState (stroe) when using the useAppSelector
})
