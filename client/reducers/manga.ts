import { Action } from '../actions/index'
import {
  RECEIVE_ALL_MANGA,
  TOGGLE_EDIT,
  UPDATE_MANGA,
  DELETE_MANGA,
} from '../actions/manga'
import { MangaEdit } from '../../common/manga'

const initialState: MangaEdit[] = []

function mangaReducer(state = initialState, action: Action): MangaEdit[] {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_ALL_MANGA:
      for (let i = 0; i < payload.length; i++) {
        payload[i].edit = false
      }
      return payload
    case TOGGLE_EDIT:
      for (let i = 0; i < state.length; i++) {
        if (Number(state[i].id) === Number(payload)) {
          state[i].edit = !state[i].edit
        }
      }
      return [...state]
    case UPDATE_MANGA:
      for (let i = 0; i < state.length; i++) {
        if (Number(state[i].id) === Number(payload.id)) {
          state[i].title = payload.title
          state[i].books = payload.books
          state[i].author = payload.author
          state[i].location = payload.location
          state[i].imageSrc = payload.imageSrc
        }
      }
      return [...state]
    case DELETE_MANGA:
      return state.filter((manga) => Number(manga.id) != Number(payload))
    default:
      return state
  }
}

export default mangaReducer
