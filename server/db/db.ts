import { MoviesData } from '../../client/models/Movies'
import connection from './connection'

export function getAllMovies(db = connection): Promise<MoviesData[]> {
  return db('movies').select('*')
}
