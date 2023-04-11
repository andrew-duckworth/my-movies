import { ThunkAction } from '../store'
import { Data, Imdb } from '../../common/types'
import { searchMoviesAPI } from '../apis/imdb'
import { postMovieAPI } from '../apis/movies'

export const IMDB_DATA = 'IMDB_DATA'
export const SAVE_MOVIE = 'SAVE_MOVIE'

// Acction

export function setMovies(imdbArr: Imdb[]) {
  return {
    type: IMDB_DATA,
    payload: imdbArr,
  }
}

export function saveMovie(movie: Imdb) {
  return {
    type: SAVE_MOVIE,
    payload: movie,
  }
}

// Thuncction

export function searchMoviesThunk(movie: string): ThunkAction {
  return (dispatch) => {
    return searchMoviesAPI(
      //RENAME THIS SO IT MAKES SENSE LATER
      movie
    )
      .then((result) => {
        dispatch(setMovies(result))
      })
      .catch((err) => console.log('fergy bad', err.message))
  }
}

export function addMovieThunk(movie: Data): ThunkAction {
  return (dispatch) => {
    return postMovieAPI(movie)
      .then((movie) => {
        dispatch(saveMovie(movie))
      })
      .catch((err) => console.log('Thunk Err: ', err.message))
  }
}
