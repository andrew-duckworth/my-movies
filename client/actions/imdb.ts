import { ThunkAction } from '../store'

export const IMDB_DATA = 'IMDB_DATA'

import { ImdbMovie } from '../../common/types'
import { searchForMovie } from '../apis/imdb'

export function setMovies(imdbMovie: ImdbMovie[]) {
  return {
    type: IMDB_DATA,
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
