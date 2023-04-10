import { Action } from '../actions/index'
import { RECEIVE_ALL_MANGA, TOGGLE_EDIT } from '../actions/manga'
import { Manga, MangaEdit } from '../../common/manga'

const initialState: MangaEdit[] = []

function mangaReducer(state = initialState, action: Action): MangaEdit[] {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_ALL_MANGA:
      for (const singleManga of payload) {
        singleManga.edit = false
      }
      return payload
    case TOGGLE_EDIT:
      for (const singleManga of payload) {
        if (singleManga.id == payload) {
          singleManga.edit = !singleManga.edit
        }
      }
      return payload
    default:
      return state
  }
}

export default mangaReducer
