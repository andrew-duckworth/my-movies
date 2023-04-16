import {
  Action,
  ADD_ALBUM,
  GET_ALBUMS,
  DEL_ALBUM,
} from '../actions/albumAction'
import { AlbumsInterface } from '../common/albums'

const initialState: AlbumsInterface[] = []

function reducer(state = initialState, action: Action): AlbumsInterface[] {
  const { type, payload } = action

  switch (type) {
    case 'GET_ALBUMS':
      return payload
    case 'ADD_ALBUM':
      return [...state, payload]
    case 'DEL_ALBUM':
      return state.filter((album) => album.id !== payload)

    default:
      return state
  }
}

export default reducer
