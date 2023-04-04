import connection from './connection'

import { Movie } from '../../common/types'

export function getAllMovies(db = connection): Promise<Movie[]> {
  return db('movies').select('*')
}

export function addMovie(movie: Movie, db = connection): Promise<Movie[]> {
  return db('movies').insert(movie).returning(['id', 'title', 'image'])
}
