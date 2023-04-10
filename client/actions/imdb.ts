import { ThunkAction } from '../store'
import { Imdb } from '../../common/types'
import { searchMoviesAPI } from '../apis/imdb'

export const IMDB_DATA = 'IMDB_DATA'

// Acction

export function setMovies(imdbArr: Imdb[]) {
  return {
    type: IMDB_DATA,
    payload: imdbArr,
  }
}

// Thuncction

export function searchMoviesThunk(
  movie: string
  // maybe change this to an object or arr if we add dates. might still be able to stay a string with a space because of the %20 thing.
): ThunkAction {
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
