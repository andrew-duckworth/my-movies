import { ThunkAction } from '../store'
import type { Movie } from '../../common/types'
import { fetchMovies } from '../apis/movies'

export const SHOW_MOVIES = 'SHOW_MOVIES'

// Simple Actions

export function getMoviesAction(movies: Movie[]) {
  return {
    type: SHOW_MOVIES,
    payload: movies
  }
}

// Thuncctions
// get movies from db
export function getMoviesThunk(): ThunkAction {
  return (dispatch) => { // <- why? - pretty much just calling a function
    return fetchMovies() // get data from the API
      .then(movies => { // take the data from the API/our databse
        dispatch(getMoviesAction(movies)) // dispatch the simple action
        // with the movie array as the payload
      })
      // .catch(err => console.log(err.message))
  }
}




/*

NOT NEEDED ->
export function getMoviesThunk() {
  return thunccyBoi()
}

function thunccyBoi() {
  return fetchMovies() // get data from the API
      .then(movies => { // take the data from the API/our databse
        getMoviesAction(movies) // dispatch the simple action
        // with the movie array as the payload
      })
      // .catch(err => console.log(err.message))
}
*/