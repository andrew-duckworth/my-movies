import { Action } from '../actions/index'
import { RECEIVE_MANGA } from '../actions/manga'
import { Manga, MangaEdit } from '../../common/manga'

const initialState: MangaEdit = {
  id: 0,
  title: '',
  books: '',
  author: '',
  location: '',
  imageSrc: '',
  edit: false,
}

function singleMangaReducer(state = initialState, action: Action): MangaEdit {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_MANGA:
      return payload
    default:
      return state
  }
}

export default singleMangaReducer
