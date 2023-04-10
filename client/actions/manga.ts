import type { ThunkAction } from '../store'
import { Manga, MangaEdit } from '../../common/manga'

import { getAllMangaApi, addMangaApi, getMangaByIdApi } from '../apis/manga'
import { getMangaById } from '../../server/db/db'

export const REQUEST_ALL_MANGA = 'REQUEST_ALL_MANGA'
export const RECEIVE_ALL_MANGA = 'RECEIVE_ALL_MANGA'
export const REQUEST_MANGA = 'REQUEST_MANGA'
export const RECEIVE_MANGA = 'RECEIVE_MANGA'
export const ADD_MANGA = 'ADD_MANGA'
export const UPDATE_MANGA = 'UPDATE_MANGA'
export const DELETE_MANGA = 'DELETE_MANGA'
export const TOGGLE_EDIT = 'TOGGLE_EDIT'
export const SHOW_ERROR = 'SHOW_ERROR'

export type MangaAction =
  | { type: typeof REQUEST_ALL_MANGA; payload: null }
  | { type: typeof RECEIVE_ALL_MANGA; payload: MangaEdit[] }
  | { type: typeof REQUEST_MANGA; payload: string }
  | { type: typeof RECEIVE_MANGA; payload: Manga }
  | { type: typeof ADD_MANGA; payload: Manga }
  | { type: typeof UPDATE_MANGA; payload: Manga }
  | { type: typeof DELETE_MANGA; payload: string }
  | { type: typeof TOGGLE_EDIT; payload: string }
  | { type: typeof SHOW_ERROR; payload: string }

export function requestManga(): MangaAction {
  return {
    type: REQUEST_ALL_MANGA,
    payload: null,
  }
}

export function receiveManga(manga: MangaEdit[]): MangaAction {
  return {
    type: RECEIVE_ALL_MANGA,
    payload: manga,
  }
}

export function requestSingleManga(id: string): MangaAction {
  return {
    type: REQUEST_MANGA,
    payload: id,
  }
}

export function receiveSingleManga(manga: MangaEdit): MangaAction {
  return {
    type: RECEIVE_MANGA,
    payload: manga,
  }
}

export function addManga(manga: Manga): MangaAction {
  return {
    type: ADD_MANGA,
    payload: manga,
  }
}

export function updateManga(manga: Manga): MangaAction {
  return {
    type: UPDATE_MANGA,
    payload: manga,
  }
}

export function deleteManga(id: string): MangaAction {
  return {
    type: DELETE_MANGA,
    payload: id,
  }
}

export function toggleEdit(id: string): MangaAction {
  return {
    type: TOGGLE_EDIT,
    payload: id,
  }
}

export function showError(errorMessage: string): MangaAction {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}

export function fetchAllManga(): ThunkAction {
  return (dispatch) => {
    dispatch(requestManga())
    return getAllMangaApi()
      .then((mangaArr) => {
        dispatch(receiveManga(mangaArr))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export function fetchSingleManga(id: string): ThunkAction {
  return (dispatch) => {
    dispatch(requestSingleManga(id))
    return getMangaByIdApi(id)
      .then((manga) => {
        dispatch(receiveSingleManga(manga))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
