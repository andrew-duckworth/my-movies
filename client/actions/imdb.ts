import { ThunkAction } from "../store"
import type { ImdbMovie, MovieData } from "../../common/types"
import { searchForMovie } from "../apis/imdb"
import { postOneMovie } from "../apis/movies"

export const IMDB_DATA = 'IMDB_DATA'
export const SAVE_ONE_MOVIE = 'SAVE_ONE_MOVIE'

// Simple Action

export function setMovies(imdbMovies: ImdbMovie[]) {
  return {
    type: IMDB_DATA,
    payload: imdbMovies
  }
}

export function saveOneMovie(imdbMovie: ImdbMovie) {
  return {
    type: SAVE_ONE_MOVIE,
    payload: imdbMovie
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

export function addMovieThunk(movie: MovieData): ThunkAction {
  return (dispatch) => {
    return postOneMovie(movie)
      .then((movie) => {
        dispatch(saveOneMovie(movie))
      })
      .catch(err => console.log(err.message))
  }
}
