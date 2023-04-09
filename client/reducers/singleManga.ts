import { Action } from '../actions/index'
import { RECEIVE_MANGA } from '../actions/manga'
import { Manga } from '../../common/manga'

const initialState: Manga = {
  id: 0,
  title: '',
  books: '',
  author: '',
  location: '',
  imageSrc: '',
  editable: false,
}

function singleMangaReducer(state = initialState, action: Action): Manga {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_MANGA:
      return payload
    default:
      return state
  }
}

export default singleMangaReducer
