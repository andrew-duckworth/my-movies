import { ThunkAction } from '../store'

export const IMDB_DATA = 'IMDB_DATA'

export const ADD_MOVIE = 'ADD_MOVIE'

import { ImdbMovie, Movie } from '../../common/types'
import { searchForMovie } from '../apis/imdb'
import { addMovieApi } from '../apis/movies'

export function setMovies(imdbMovie: ImdbMovie[]) {
  return {
    type: IMDB_DATA,
    payload: imdbMovie,
  }
}

export function saveOneMovie(imdbMovie: ImdbMovie) {
  return {
    type: ADD_MOVIE,
    payload: imdbMovie,
  }
}

export function setMoviesThunk(movie: string): ThunkAction {
  return (dispatch) => {
    return searchForMovie(movie)
      .then((movies) => {
        dispatch(setMovies(movies))
      })
      .catch((err) => console.log(err.message))
  }
}

export function addMovieThunk(movie: ImdbMovie): ThunkAction {
  return (dispatch) => {
    return addMovieApi(movie)
      .then((movie) => {
        console.log(movie)
        dispatch(saveOneMovie(movie))
      })
      .catch((err) => console.log(err.message))
  }
}
