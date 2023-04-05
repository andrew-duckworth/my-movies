import { ThunkAction } from '../store'
import { ImdbMovie, MovieData } from '../../common/types'
import { deleteMovie, searchForMovie } from '../apis/imdb'
import { postOneMovie } from '../apis/movies'

export const IMDB_DATA = 'IMDB_DATA'
export const SAVE_ONE_MOVIE = 'SAVE_ONE_MOVIE'
export const DEL_ONE_MOVIE = 'DEL_ONE_MOVIE'

//simple action

export function setMovies(imdbMovies: ImdbMovie[]) {
  return {
    type: IMDB_DATA,
    payload: imdbMovies,
  }
}

export function saveOneMovie(imdbMovie: ImdbMovie) {
  return {
    type: SAVE_ONE_MOVIE,
    payload: imdbMovie,
  }
}

export function delOneMovie(id: number) {
  return {
    type: DEL_ONE_MOVIE,
    payload: id,
  }
}

//THUNK ACTION

export function setMoviesThunk(movie: string): ThunkAction {
  return (dispatch) => {
    return searchForMovie(movie)
      .then((result) => {
        dispatch(setMovies(result))
      })
      .catch((err) => console.log(err.message))
  }
}

export function addMovieThunk(movie: MovieData): ThunkAction {
  return (dispatch) => {
    return postOneMovie(movie)
      .then((movie) => {
        console.log(movie)
        dispatch(saveOneMovie(movie))
      })
      .catch((err) => console.log(err.message))
  }
}

export function deleteMovieThunk(id: number): ThunkAction {
  return (dispatch) => {
    return deleteMovie(id)
      .then(() => {
        dispatch(delOneMovie(id))
      })
      .catch((err) => console.log(err.message))
  }
}
