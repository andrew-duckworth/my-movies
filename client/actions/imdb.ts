import { ThunkAction } from "../store"
import type { ImdbMovie } from "../../common/types"
import { searchForMovie } from "../apis/imdb"

export const IMDB_DATA = 'IMDB_DATA'

// Simple Action

export function setMovies(imdbMovies: ImdbMovie[]) {
  return {
    type: IMDB_DATA,
    payload: imdbMovies
  }
}

// ThunccyBoiis

export function searchMoviesThunk(movie: string): ThunkAction {
  return (dispatch) => {
    return searchForMovie(movie)
      .then(result => {
        dispatch(setMovies(result))
      })
      .catch(err => console.log('thuncc bad', err.message))
  }
}