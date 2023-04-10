import { combineReducers } from 'redux'

import errorMessage from './errorMessage'
import mangaReducer from './manga'
import singleMangaReducer from './singleManga'
import toggleEditReducer from './toggleEdit'

export default combineReducers({
  errorMessage,
  mangaReducer,
  singleMangaReducer,
  toggleEditReducer,
})
