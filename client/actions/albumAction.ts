import { getAllAlbums } from '../apis/apiClient'
import { AlbumsInterface } from '../common/albums'
import { ThunkAction } from '../store'

export const GET_ALBUMS = 'GET_ALBUMS'

export type Action = { type: typeof GET_ALBUMS; payload: AlbumsInterface[] }

export function getAlbums(albums: AlbumsInterface[]): Action {
  return {
    type: GET_ALBUMS,
    payload: albums,
  }
}

export function getAlbumsThunk(): ThunkAction {
  return (dispatch) => {
    return getAllAlbums()
      .then((albums) => {
        dispatch(getAlbums(albums))
      })
      .catch((err) => {
        dispatch(err.message)
      })
  }
}
