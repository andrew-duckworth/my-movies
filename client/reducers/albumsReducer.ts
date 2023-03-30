import { Action } from '../actions/albumAction'
import { AlbumsInterface } from '../common/albums'

const initialState = [] as AlbumsInterface[]

function reducer(state = initialState, action: Action): AlbumsInterface[] {
  const { type, payload } = action

  switch (type) {
    case 'GET_ALBUMS':
      return payload
    default:
      return state
  }
}

export default reducer
