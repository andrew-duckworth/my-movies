import { ThunkAction } from "../store"
import type { ImdbMovie, Movie, MovieData } from "../../common/types"

import { fetchMovies, postOneMovie } from '../apis/movies'
import { searchForMovie } from "../apis/imdb"

export type Action = 
  | { type: 'IMDB_DATA', payload: ImdbMovie[] }
  | { type: 'SHOW_MOVIES', payload: Movie[] }
  | { type: 'SAVE_ONE_MOVIE', payload: Movie }
  | { type: 'SET_ERROR', payload: string }

// Simple Action

export function setImdbMovies(imdbMovies: ImdbMovie[]): Action {
  return {
    type: 'IMDB_DATA',
    payload: imdbMovies
  }
}

export function getMoviesAction(movies: Movie[]): Action {
  return {
    type: 'SHOW_MOVIES',
    payload: movies
  }
}

export function saveOneMovie(imdbMovie: Movie): Action {
  return {
    type: 'SAVE_ONE_MOVIE',
    payload: imdbMovie
  }
}

export function setError(err: string): Action {
  return {
    type: 'SET_ERROR',
    payload: err
  }
}

// ThunccyBoiis / Thuncctions

export function searchMoviesThunk(movie: string): ThunkAction {
  return (dispatch) => {
    return searchForMovie(movie)
      .then(result => dispatch(setImdbMovies(result)))
      .catch(() => dispatch(setError('Error fetching movies from IMDB')))
  }
}

export function addMovieThunk(movie: MovieData): ThunkAction {
  return (dispatch) => {
    return postOneMovie(movie)
      .then(movie => dispatch(saveOneMovie(movie)))
      .catch(() => dispatch(setError('Error saving movie')))
  }
}

export function getMoviesThunk(): ThunkAction {
  return (dispatch) => {
    return fetchMovies()
      .then(movies => dispatch(getMoviesAction(movies)))
      .catch(() => dispatch(setError('Error fetching saved movies')))
  }
}
