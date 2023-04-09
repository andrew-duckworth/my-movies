import { combineReducers } from 'redux'

import errorMessage from './errorMessage'
import mangaReducer from './manga'
import singleMangaReducer from './singleManga'

export default combineReducers({
  errorMessage,
  mangaReducer,
  singleMangaReducer,
})
