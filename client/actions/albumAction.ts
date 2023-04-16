import { getAllAlbums } from '../apis/apiClient'
import { AlbumsInterface } from '../common/albums'
import { ThunkAction } from '../store'
import { addNewAlbum, deleteAlbum } from '../apis/apiClient'

export const GET_ALBUMS = 'GET_ALBUMS'
export const SHOW_ERROR = 'SHOW ERROR'
export const ADD_ALBUM = 'ADD_ALBUM'
export const DEL_ALBUM = 'DEL_ALBUM'

export type Action =
  | { type: typeof GET_ALBUMS; payload: AlbumsInterface[] }
  | { type: typeof SHOW_ERROR; payload: string }
  | { type: typeof ADD_ALBUM; payload: AlbumsInterface }
  | { type: typeof DEL_ALBUM; payload: number }

export function getAlbums(albums: AlbumsInterface[]): Action {
  return {
    type: GET_ALBUMS,
    payload: albums,
  }
}

export function addAlbum(addAlbum: AlbumsInterface): Action {
  return {
    type: ADD_ALBUM,
    payload: addAlbum,
  }
}

export function delAlbum(id: AlbumsInterface['id']): Action {
  return {
    type: DEL_ALBUM,
    payload: id,
  }
}

export function showError(errorMessage: string): Action {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}

export function getAlbumsThunk(): ThunkAction {
  return (dispatch) => {
    return getAllAlbums()
      .then((albums) => {
        dispatch(getAlbums(albums))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export function addNewAlbumThunk(album: AlbumsInterface): ThunkAction {
  return (dispatch) => {
    console.log('addNewAlbumThunk', album)
    return addNewAlbum(album)
      .then((album) => {
        dispatch(addAlbum(album))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}

export function deleteAlbumThunk(id: AlbumsInterface['id']): ThunkAction {
  return (dispatch) => {
    return deleteAlbum(id)
      .then(() => {
        dispatch(delAlbum(id))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}
