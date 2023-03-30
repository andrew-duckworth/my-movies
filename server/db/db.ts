import { MoviesData } from '../../client/models/Movies'
import connection from './connection'

export function getAllMovies(db = connection): Promise<MoviesData[]> {
  return db('movies').select('*')
}

export function deleteMovie(id: number, db = connection): Promise<number> {
  return db('movies').del().where('id', id).returning(['id'])
}
