import type { ThunkAction } from '../store'
import { Manga } from '../../common/manga'

import { getAllManga } from '../apis/manga'

export const REQUEST_ALL_MANGA = 'REQUEST_ALL_MANGA'
export const RECEIVE_ALL_MANGA = 'RECEIVE_ALL_MANGA'
export const SHOW_ERROR = 'SHOW_ERROR'

export type MangaAction =
  | { type: typeof REQUEST_ALL_MANGA; payload: null }
  | { type: typeof RECEIVE_ALL_MANGA; payload: Manga[] }
  | { type: typeof SHOW_ERROR; payload: string }

export function requestManga(): MangaAction {
  return {
    type: REQUEST_ALL_MANGA,
    payload: null,
  }
}

export function receiveManga(manga: Manga[]): MangaAction {
  return {
    type: RECEIVE_ALL_MANGA,
    // payload: manga.map((eachManga) => eachManga.data),
    payload: manga,
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
    return getAllManga()
      .then((mangaArr) => {
        dispatch(receiveManga(mangaArr))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
