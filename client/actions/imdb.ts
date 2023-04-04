import { ThunkAction } from '../store'
import type { ImdbMovie, Movie } from '../../common/types'
import { searchForMovie } from '../apis/imdb'
import { postOneMovie } from '../apis/movies'

export const IMDB_DATA = 'IMDB_DATA'
export const SAVE_ONE_MOVIE = 'SAVE_ONE_MOVIE'

// Simple Action

export function setMovies(imdbMovies: ImdbMovie[]) {
  return {
    type: IMDB_DATA,
    payload: imdbMovies,
  }
}

export function saveOneMovie(imdbMovies: ImdbMovie) {
  return {
    type: SAVE_ONE_MOVIE,
    payload: imdbMovies,
  }
}

// Thuncctions

export function setMoviesThunk(movie: string): ThunkAction {
  return (dispatch) => {
    return searchForMovie(movie)
      .then((result) => {
        dispatch(setMovies(result))
      })
      .catch((err) => console.log(err.message))
  }
}

export function addMovieThunk(movie: Movie): ThunkAction {
  return (dispatch) => {
    return postOneMovie(movie)
      .then((movie) => {
        dispatch(saveOneMovie(movie))
      })
      .catch((err) => console.log(err.message))
  }
}
