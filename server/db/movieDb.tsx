import { Movie } from '../../client/models/movies'
import connection from './connection'

export function getMovies(db = connection): Promise<Movie[]> {
  return db('movies').select()
}

export function deleteMovies(id: number, db = connection) {
  return db('movies').where('id', id).delete()
}
