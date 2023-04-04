import { ThunkAction } from '../store'
import type { ImdbMovie } from '../../common/types'
import { searchForMovie } from '../apis/imdb'
import { postOneMovie } from '../apis/movies'

export const IMDB_DATA = 'IMDB_DATA'

// Simple Action

export function setMovies(imdbMovies: ImdbMovie[]) {
  return {
    type: IMDB_DATA,
    payload: imdbMovies,
  }
}

export function saveOneMovie(imdbMovie: ImdbMovie[]) {
  return {
    type: IMDB_DATA,
    payload: imdbMovie,
  }
}

// Get Thunkked

export function searchMoviesThunk(movie: string): ThunkAction {
  return (dispatch) => {
    return searchForMovie(movie)
      .then((result) => {
        dispatch(setMovies(result))
      })
      .catch((err) => console.log(err.message))
  }
}

export function addMovieThunk(movie: ImdbMovie): ThunkAction {
  return (dispatch) => {
    return postOneMovie(movie).then((id) => {
      dispatch(saveOneMovie(id))
    })
  }
}
